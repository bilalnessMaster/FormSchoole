import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Trash2, Edit, XCircle, BarChart3, Users, UserCheck, FileText, Search, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { toast, Toaster } from 'sonner';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];


export default function Dashboard({ total, attentes, acceptes, users, status }: { total: number, attentes: number, acceptes: number, users: any, status: string }) {
    const [date , setDate]= useState('')
    const page = usePage()
    console.log(page);
    const [searchQuery, setSearchQuery] = useState('');
    const stats = [
        {
            title: 'Total Candidats',
            value: total,
            icon: FileText,
            change: '+12%',
            trend: 'up'
        },
        {
            title: 'En Attente',
            value: attentes,
            icon: Users,
            change: '-5%',
            trend: 'down'
        },
        {
            title: 'Acceptés',
            value: acceptes,
            icon: UserCheck,
            change: '+8%',
            trend: 'up'
        },
    ];
    useEffect(() => {
        if (status) {
            // You can display the status in a toast or in the UI
            toast.success(status);
        }
    }, [status]);
    // Filter candidates based on search query
    const filteredCandidates = users.filter((candidate: any) =>
        candidate.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.field_of_study.toLowerCase().includes(searchQuery.toLowerCase()) ||
        candidate.high_school.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to format the status in French
    const formatStatus = (status: string) => {
        switch (status) {
            case 'attente': return 'En Attente';
            case 'accepte': return 'Accepté';
            case 'refuse': return 'Refusé';
            default: return status;
        }
    };

    // Function to format date
    const formatDate = (dateString: string | null) => {
        if (!dateString) return 'Non planifié';
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Tableau de Bord Admin" />
            <div className="flex h-full flex-1 flex-col gap-4 p-4">
                <h1 className="text-2xl font-bold">Tableau de Bord Administrateur</h1>

                {/* Statistics Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    {stats.map((stat, index) => (
                        <Card key={index}>
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-gray-500">{stat.title}</p>
                                        <h3 className="text-3xl font-bold">{stat.value}</h3>
                                        <p className={`text-xs ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                                            {stat.change} du mois dernier
                                        </p>
                                    </div>
                                    <div className="rounded-full bg-gray-100 p-3 dark:bg-gray-800">
                                        <stat.icon className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Search Input */}
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                        type="text"
                        placeholder="Rechercher par nom, email, domaine d'étude ou lycée..."
                        className="pl-10 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Candidates Table */}
                <Card className="mt-4">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span>Candidatures Récentes</span>
                            {/* <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                Voir Tout
                            </Button> */}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nom</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Domaine d'étude</TableHead>
                                        <TableHead>Note</TableHead>
                                        <TableHead>Année du Bac</TableHead>
                                        <TableHead>Entretien</TableHead>
                                        <TableHead>Statut</TableHead>
                                        <TableHead>Actions</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {filteredCandidates.map((candidate: any) => (
                                        <TableRow key={candidate.id}>
                                            <TableCell className="font-medium">{candidate.name}</TableCell>
                                            <TableCell>{candidate.email}</TableCell>
                                            <TableCell>{candidate.field_of_study}</TableCell>
                                            <TableCell>{candidate.last_score}/20</TableCell>
                                            <TableCell>{candidate.graduation_year}</TableCell>
                                            <TableCell>{formatDate(candidate?.visit)}</TableCell>
                                            <TableCell>
                                                <Badge
                                                    className={
                                                        candidate.application_status === 'accepte' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                                                            candidate.application_status === 'refuse' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100' :
                                                                'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100'
                                                    }
                                                >
                                                    {formatStatus(candidate.application_status)}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex space-x-2">
                                                    <Link method='post' data={{ id: candidate.id }} href={'/accepte-candidate'} className='border h-8 w-8 p-0 flex items-center justify-center rounded cursor-pointer bg-neutral-50' title="Accepter">
                                                        <CheckCircle className="h-4 w-4 text-green-600" />
                                                    </Link>
                                                    <Link method='post' data={{ id: candidate.id }} href={'/refuse-candidate'} className='border h-8 w-8 p-0 flex items-center justify-center rounded cursor-pointer bg-neutral-50' title="Refuser">
                                                        <XCircle className="h-4 w-4 text-red-600" />
                                                    </Link>
                                                    <Dialog>
                                                        <DialogTrigger className='border h-8 w-8 p-0 flex items-center justify-center rounded cursor-pointer bg-neutral-50' ><Calendar className="h-4 w-4 text-blue-600" /></DialogTrigger>
                                                        <DialogContent>
                                                            <DialogHeader>
                                                                <DialogTitle>Planifier Entretien </DialogTitle>
                                                                <DialogDescription>
                                                                Sélectionnez une date pour planifier l'entretien.

                                                                </DialogDescription>
                                                                <div className="grid gap-2">
                                                                    <Label htmlFor="date_of_birth">Date de naissance</Label>
                                                                    <Input
                                                                        id="date_of_birth"
                                                                        type="date"
                                                                        required
                                                                        tabIndex={3}
                                                                        value={date}
                                                                        onChange={(e) => setDate( e.target.value)}
                                                                      
                                                                    />
                                                                     <Link method='post' data={{ id: candidate.id , date }} href={'/planifier-candidate'} className='border  p-2 dark:bg-neutral-700 flex items-center justify-center rounded cursor-pointer bg-neutral-50' title="Refuser">
                                                                        Planifier
                                                                </Link>
                                                                </div>
                                                            </DialogHeader>
                                                        </DialogContent>
                                                    </Dialog>

                                                    <Link href={'/delete-candidate'} className='border h-8 w-8 p-0 flex items-center justify-center rounded cursor-pointer bg-neutral-50' method='post' data={{ id: candidate.id }}>

                                                        <Trash2 className="h-4 w-4 text-red-600" />

                                                    </Link>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                {/* Additional metrics/charts section */}
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <BarChart3 className="mr-2 h-5 w-5" />
                                Candidatures par Domaine d'Étude
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex h-64 items-center justify-center">
                            <PlaceholderPattern className="h-full w-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center">
                                <Users className="mr-2 h-5 w-5" />
                                Taux d'Acceptation par Année
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex h-64 items-center justify-center">
                            <PlaceholderPattern className="h-full w-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Toaster />
        </AppLayout>
    );
}