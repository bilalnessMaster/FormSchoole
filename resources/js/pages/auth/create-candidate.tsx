import { Head, useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

import AuthLayout from '@/layouts/auth-layout';
import { toast } from 'sonner';

type RegisterForm = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
    date_of_birth: string;
    gender: 'homme' | 'femme';
    nationality: string;
    phone: string;
    address: string;
    field_of_study: string;
    last_score: string;
    high_school: string;
    graduation_year: string;
};

export default function Register() {
    const { data, setData, post, processing, errors } = useForm<Required<RegisterForm>>({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        date_of_birth: '',
        gender: 'homme',
        nationality: '',
        phone: '',
        address: '',
        field_of_study: '',
        last_score: '',
        high_school: '',
        graduation_year: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('save-candidate'),{
            onSuccess : () => { 
                toast.success('Compte a été créé avec succès')
            }
        });
    };

    // Generate array of last 100 years for graduation year dropdown
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: 100 }, (_, i) => (currentYear - i).toString());

    return (
        <AuthLayout title="Créer candidature" description="Enter vos informations pour s'inscrire">
            <Head title="créer candidature" />
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    {/* Personal Information */}
                    <h2 className="text-lg font-medium">formulaire de candidature</h2>
                

                   

                    <div className="grid gap-2">
                        <Label htmlFor="date_of_birth">Date de naissance</Label>
                        <Input
                            id="date_of_birth"
                            type="date"
                            required
                            tabIndex={3}
                            value={data.date_of_birth}
                            onChange={(e) => setData('date_of_birth', e.target.value)}
                            disabled={processing}
                        />
                        <InputError message={errors.date_of_birth} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="gender">sexe</Label>
                        <select
                            id="gender"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                            tabIndex={4}
                            value={data.gender}
                            onChange={(e) => setData('gender', e.target.value as 'homme' | 'femme')}
                            disabled={processing}
                        >
                            <option value="homme">Homme</option>
                            <option value="femme">Femme</option>
                        </select>
                        <InputError message={errors.gender} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="nationality">Nationalite</Label>
                        <Input
                            id="nationality"
                            type="text"
                            required
                            tabIndex={5}
                            value={data.nationality}
                            onChange={(e) => setData('nationality', e.target.value)}
                            disabled={processing}
                            placeholder="ton nationalite"
                        />
                        <InputError message={errors.nationality} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="phone">numero de telephone</Label>
                        <Input
                            id="phone"
                            type="tel"
                            tabIndex={6}
                            value={data.phone}
                            onChange={(e) => setData('phone', e.target.value)}
                            disabled={processing}
                            placeholder="+123456789"
                        />
                        <InputError message={errors.phone} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="address">Addresse</Label>
                        <Input
                            id="address"
                            type="text"
                            tabIndex={7}
                            value={data.address}
                            onChange={(e) => setData('address', e.target.value)}
                            disabled={processing}
                            placeholder="Your address"
                        />
                        <InputError message={errors.address} />
                    </div>

                    {/* Academic Information */}
                    <h2 className="text-lg font-medium mt-4">Information Academique</h2>

                    <div className="grid gap-2">
                        <Label htmlFor="field_of_study">filiere d'etude</Label>
                        <Input
                            id="field_of_study"
                            type="text"
                            required
                            tabIndex={8}
                            value={data.field_of_study}
                            onChange={(e) => setData('field_of_study', e.target.value)}
                            disabled={processing}
                            placeholder="Your field of study"
                        />
                        <InputError message={errors.field_of_study} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="last_score">note de bultin</Label>
                        <Input
                            id="last_score"
                            type="number"
                            step="0.01"
                            required
                            tabIndex={9}
                            value={data.last_score}
                            onChange={(e) => setData('last_score', e.target.value)}
                            disabled={processing}
                            placeholder="0.00"
                        />
                        <InputError message={errors.last_score} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="high_school">lycee</Label>
                        <Input
                            id="high_school"
                            type="text"
                            required
                            tabIndex={10}
                            value={data.high_school}
                            onChange={(e) => setData('high_school', e.target.value)}
                            disabled={processing}
                            placeholder="Name of your high school"
                        />
                        <InputError message={errors.high_school} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="graduation_year">anne de graduation</Label>
                        <select
                            id="graduation_year"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            required
                            tabIndex={11}
                            value={data.graduation_year}
                            onChange={(e) => setData('graduation_year', e.target.value)}
                            disabled={processing}
                        >
                            <option value="">Select graduation year</option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                        <InputError message={errors.graduation_year} />
                    </div>
                    <Button type="submit" className="mt-6 w-full cursor-pointer" tabIndex={14} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                            Create candidature
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}