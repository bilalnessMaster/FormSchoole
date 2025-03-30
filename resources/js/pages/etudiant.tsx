import AppLayout from '@/layouts/app-layout';
import { User, type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarIcon, GraduationCapIcon, MapPinIcon, PhoneIcon, UserIcon, MailIcon, BuildingIcon, BarChartIcon } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { twMerge } from 'tailwind-merge';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'etudiant',
        href: '/etudiant',
    },
];

// Define student type based on your schema
type Student = {
    id: number;
    date_of_birth: string;
    gender: 'homme' | 'femme';
    nationality: string;
    phone: string | null;
    address: string | null;
    field_of_study: string;
    last_score: number;
    high_school: string;
    graduation_year: number;
    application_status: 'attente' | 'accepte' | 'refuse';
    visit: string | null;
};

// Example student data (in reality, this would come from props)
const studentData: Student = {
    id: 1,
    date_of_birth: '1998-05-15',
    gender: 'homme',
    nationality: 'Moroccan',
    phone: '+212 612345678',
    address: '123 Rue Mohammed V, Casablanca',
    field_of_study: 'Computer Science',
    last_score: 16.75,
    high_school: 'Lycée Al Khansaa',
    graduation_year: 2022,
    application_status: 'attente',
    visit: '2025-04-15T10:00:00Z'
};

// Format date for display
const formatDate = (dateString: string | null) => {
    if (!dateString) return 'Non programmé';
    return new Date(dateString).toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

// Calculate age from date of birth
const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
};

// Get status badge color
const getStatusColor = (status: 'attente' | 'accepte' | 'refuse') => {
    switch (status) {
        case 'attente': return 'bg-yellow-100 text-yellow-800';
        case 'accepte': return 'bg-green-100 text-green-800';
        case 'refuse': return 'bg-red-100 text-red-800';
        default: return 'bg-gray-100 text-gray-800';
    }
};

const getStatusText = (status: 'attente' | 'accepte' | 'refuse') => {
    switch (status) {
        case 'attente': return 'En attente';
        case 'accepte': return 'Accepté';
        case 'refuse': return 'Refusé';
        default: return status;
    }
};

export default function Etudiant({ user, candidature }: { user: User ,  candidature: any}) {
    // In a real implementation, you'd get the student data from props or make an API call
    console.log(candidature);

    return (
        <AppLayout user={user} breadcrumbs={breadcrumbs}>
            <Head title="Profil Étudiant" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                {/* Top row with 3 cards */}
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {/* Profile Summary Card */}
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                                    {user.name.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                            </Avatar>
                            <div>
                                <h2 className="text-xl font-semibold">{user.name}</h2>
                                <p className="text-sm text-gray-600">{user.email}</p>
                                <div className="mt-2">
                                    <Badge className={twMerge(getStatusColor(candidature.application_status))}>
                                        {getStatusText(candidature.application_status)}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Academic Info Card */}
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4">
                        <div className="flex flex-col h-full justify-between">
                            <h3 className="font-medium mb-2 flex items-center gap-2">
                                <GraduationCapIcon className="h-4 w-4" />
                                Informations Académiques
                            </h3>
                            <div className="space-y-2">
                                <div className="text-sm">
                                    <span className="text-gray-600">Filière:</span> {candidature.field_of_study}
                                </div>
                                <div className="text-sm">
                                    <span className="text-gray-600">Lycée:</span> {candidature.high_school}
                                </div>
                                <div className="text-sm">
                                    <span className="text-gray-600">Année de Bac:</span> {candidature.graduation_year}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Score Card */}
                    <div className="border-sidebar-border/70 dark:border-sidebar-border relative overflow-hidden rounded-xl border p-4">
                        <div className="flex flex-col h-full">
                            <h3 className="font-medium mb-3 flex items-center gap-2">
                                <BarChartIcon className="h-4 w-4" />
                                Note du Dernier Examen
                            </h3>
                            <div className="flex-1 flex flex-col justify-center items-center">
                                <div className="text-3xl font-bold">{candidature.last_score}</div>
                                <div className="text-sm text-gray-600">/ 20</div>
                                <Progress 
                                    value={(candidature.last_score / 20) * 100} 
                                    className="w-full h-2 mt-2"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom large card with detailed information */}
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative flex-1 overflow-hidden rounded-xl border md:min-h-min p-6">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-semibold">Dossier Complet</h2>
                        <Button variant="outline">Mettre à jour</Button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Personal Information */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <UserIcon className="h-5 w-5" />
                                    Informations Personnelles
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-2 gap-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Date de Naissance</p>
                                        <p>{formatDate(candidature.date_of_birth)} ({calculateAge(studentData.date_of_birth)} ans)</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Genre</p>
                                        <p>{studentData.gender === 'homme' ? 'Homme' : 'Femme'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Nationalité</p>
                                        <p className='capitalize'>{candidature.nationality}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p>{user.email}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Téléphone</p>
                                        <p>{candidature.phone || 'Non renseigné'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Adresse</p>
                                        <p>{candidature.address || 'Non renseignée'}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Application Status */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg flex items-center gap-2">
                                    <CalendarIcon className="h-5 w-5" />
                                    Statut de Candidature
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="rounded-lg bg-gray-50 dark:bg-neutral-900 p-4">
                                    <h4 className="font-medium mb-2">Statut Actuel</h4>
                                    <Badge className={twMerge(getStatusColor(candidature.application_status),'text-base px-3 py-1')}>
                                        {getStatusText(candidature.application_status)}
                                    </Badge>
                                    
                                    {candidature.application_status === 'attente' && (
                                        <div className="mt-4">
                                            <h4 className="font-medium mb-2">Entretien Programmé</h4>
                                            <div className="flex items-center gap-2">
                                                <CalendarIcon className="h-4 w-4 text-gray-600" />
                                                <span>{formatDate(candidature.visit)}</span>
                                            </div>
                                            <p className="text-sm text-gray-600 mt-2">
                                                Veuillez vous présenter à l'heure indiquée avec tous vos documents originaux.
                                            </p>
                                        </div>
                                    )}
                                    
                                    {candidature.application_status === 'accepte' && (
                                        <div className="mt-4 ">
                                            <h4 className="font-medium mb-2">Félicitations!</h4>
                                            <p className="text-sm text-gray-600">
                                                Votre candidature a été acceptée. Vous recevrez prochainement un email avec les prochaines étapes.
                                            </p>
                                        </div>
                                    )}
                                    
                                    {candidature.application_status === 'refuse' && (
                                        <div className="mt-4">
                                            <h4 className="font-medium mb-2">Candidature non retenue</h4>
                                            <p className="text-sm text-gray-600">
                                                Nous regrettons de vous informer que votre candidature n'a pas été retenue pour cette année.
                                            </p>
                                        </div>
                                    )}
                                </div>
                                
                                <div className="flex gap-4 mt-4">
                                    <Button variant="outline" size="sm">Documents requis</Button>
                                    <Button size="sm">Contacter l'administration</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}