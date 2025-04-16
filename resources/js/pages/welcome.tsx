import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="OFPPT - Formation Professionnelle">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:p-8 dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
                <header className="mb-6 w-full max-w-4xl text-sm">
                    <nav className="flex items-center justify-between">
                        <div className="flex items-center">
                            <div className="text-2xl font-bold">SCHOOL</div>
                            
                        </div>
                        <div className="flex items-center gap-4">
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>
                    </nav>
                </header>

                <main className="w-full max-w-4xl">
                    <section className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">Office de la Formation Professionnelle et de la Promotion du Travail</h1>
                        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-700 dark:text-gray-300">
                            Developing skills and empowering Moroccan youth through vocational training and professional development.
                        </p>
                        <div className="flex justify-center">
                            <Link
                                href={route('register')}
                                className="rounded-md bg-neutral-900 px-6 py-3 font-medium text-white hover:bg-blue-700"
                            >
                                Join our institution
                            </Link>
                        </div>
                    </section>

                    <section className="mb-12">
                        <div className="rounded-lg bg-blue-50 p-8 dark:bg-gray-800">
                            <h2 className="mb-6 text-2xl font-bold">About OFPPT</h2>
                            <p className="mb-4">
                                OFPPT (Office de la Formation Professionnelle et de la Promotion du Travail) is Morocco's leading vocational training institution, 
                                established to develop a skilled workforce that meets the needs of the country's economic sectors.
                            </p>
                            <p className="mb-4">
                                With over 380 training centers across Morocco, OFPPT offers diverse professional training programs in various fields, 
                                from technology and digital development to tourism, healthcare, and industrial trades.
                            </p>
                            <p>
                                Our mission is to provide high-quality vocational training that enhances employability and contributes to the socio-economic 
                                development of Morocco through qualified human resources.
                            </p>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-6 text-2xl font-bold">Our Training Programs</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
                                    <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Digital & Technology</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Software development, network administration, cybersecurity, digital marketing, and more.
                                </p>
                            </div>
                            
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                                    <svg className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Industry & Engineering</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Automotive, aerospace, electronics, industrial maintenance, and renewable energies.
                                </p>
                            </div>
                            
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/20">
                                    <svg className="h-6 w-6 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Hospitality & Tourism</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Hotel management, culinary arts, tourism operations, and event planning.
                                </p>
                            </div>
                            
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
                                    <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Health & Social Care</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Nursing assistant, pharmacy assistant, childcare, and elderly care.
                                </p>
                            </div>
                            
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/20">
                                    <svg className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Management & Commerce</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Business administration, accounting, logistics, marketing, and international trade.
                                </p>
                            </div>
                            
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100 dark:bg-pink-900/20">
                                    <svg className="h-6 w-6 text-pink-600 dark:text-pink-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-semibold">Arts & Design</h3>
                                <p className="text-gray-600 dark:text-gray-400">
                                    Graphic design, fashion design, interior design, and multimedia production.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="mb-6 text-2xl font-bold">Why Choose OFPPT?</h2>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h3 className="mb-4 text-xl font-semibold">Industry Partnerships</h3>
                                <p>
                                    OFPPT collaborates with over 10,000 companies across various sectors to ensure our training programs 
                                    align with market needs and provide students with valuable internship opportunities.
                                </p>
                            </div>
                            
                            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h3 className="mb-4 text-xl font-semibold">Modern Facilities</h3>
                                <p>
                                    Our training centers are equipped with state-of-the-art facilities and laboratories 
                                    that simulate real-world work environments.
                                </p>
                            </div>
                            
                            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h3 className="mb-4 text-xl font-semibold">Experienced Instructors</h3>
                                <p>
                                    Our training staff includes experienced professionals with both academic qualifications 
                                    and practical industry experience.
                                </p>
                            </div>
                            
                            <div className="rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
                                <h3 className="mb-4 text-xl font-semibold">Employment Support</h3>
                                <p>
                                    OFPPT provides career guidance and employment support to help graduates find suitable job 
                                    opportunities and start their professional careers.
                                </p>
                            </div>
                        </div>
                    </section>
                    
                    <section className="mb-12">
                        <h2 className="mb-6 text-2xl font-bold">Important Dates</h2>
                        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-700">
                            <table className="w-full text-left">
                                <thead className="bg-gray-100 dark:bg-gray-800">
                                    <tr>
                                        <th className="border-b border-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:border-gray-700 dark:text-gray-400">
                                            Event
                                        </th>
                                        <th className="border-b border-gray-200 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-700 dark:border-gray-700 dark:text-gray-400">
                                            Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-900">
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                            Registration Opening
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                            May 1, 2025
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                            Application Deadline
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                            June 30, 2025
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                            Entrance Exams
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                            July 15-25, 2025
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                            Results Announcement
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                            August 15, 2025
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                            Academic Year Begins
                                        </td>
                                        <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                                            September 15, 2025
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>

                    <section className="mb-12">
                        <div className="rounded-lg bg-neutral-900 p-8 text-white dark:bg-blue-900">
                            <h2 className="mb-4 text-2xl font-bold">Ready to Start Your Professional Journey?</h2>
                            <p className="mb-6">
                                OFPPT offers training programs adapted to your educational background and career goals. 
                                Join us to gain practical skills and professional qualifications recognized by employers.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href={route('register')}
                                    className="rounded-md bg-white px-6 py-2 font-medium text-blue-600 hover:bg-gray-100"
                                >
                                    Register Now
                                </Link>
                                <a
                                    href="#"
                                    className="rounded-md border border-white px-6 py-2 font-medium text-white hover:bg-blue-700"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </section>
                </main>

                <footer className="w-full max-w-4xl border-t border-gray-200 py-8 text-center text-sm text-gray-600 dark:border-gray-700 dark:text-gray-400">
                    <div className="mb-4 flex justify-center space-x-6">
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Programs</a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Locations</a>
                        <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
                    </div>
                    <p>&copy; {new Date().getFullYear()} OFPPT - Office de la Formation Professionnelle et de la Promotion du Travail. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
}