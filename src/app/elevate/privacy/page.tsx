import { FunctionComponent, memo } from "react";

const PrivacyPage: FunctionComponent = memo(() => (
    <div className="min-h-screen bg-white text-neutral-900 pt-28 md:pt-24">
        <div className="container mx-auto px-8 py-8 max-w-2xl">
            <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-3">Privacy Policy</h1>
                <p className="text-neutral-400 text-sm">Last updated: March 22, 2026</p>
            </div>

            <div className="space-y-10 text-neutral-500 leading-relaxed font-light">
                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">1. Introduction</h2>
                    <p>
                        Your privacy matters to us. This Privacy Policy explains what information Elevate collects, how we use it, and the choices you have regarding your data. By using the App, you
                        agree to the practices described here.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">2. Information We Collect</h2>
                    <p className="mb-3">We collect the following types of information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-normal text-neutral-600">Account information</span> — name and email address provided during sign-up via Google or Apple (the only supported sign-in
                            methods)
                        </li>
                        <li>
                            <span className="font-normal text-neutral-600">Workout data</span> — exercises, sets, reps, weights, and workout history you log in the App
                        </li>
                        <li>
                            <span className="font-normal text-neutral-600">Usage data</span> — general information about how you interact with the App (e.g., features used, session duration)
                        </li>
                    </ul>
                    <p className="mt-3">We do not collect sensitive health data beyond what you explicitly log in the App.</p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">3. How We Use Your Information</h2>
                    <p className="mb-3">We use your information to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide, maintain, and improve the App</li>
                        <li>Authenticate your account and keep it secure</li>
                        <li>Display your workout history and progress analytics</li>
                        <li>Respond to your support requests or inquiries</li>
                        <li>Send important service updates (no marketing without your consent)</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">4. Data Storage</h2>
                    <p>
                        Your data is stored securely using Supabase, a hosted database service. All data is encrypted at rest and in transit. We retain your data for as long as your account is active
                        or as needed to provide the service.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">5. Authentication</h2>
                    <p>
                        Account authentication is handled by Clerk, a third-party identity provider. We support sign-in via Google and Apple only. Clerk manages the OAuth flow with these providers and
                        returns a secure session token. We do not store your password. Clerk's privacy practices are governed by their own privacy policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">6. Sharing of Information</h2>
                    <p className="mb-3">We do not sell, rent, or share your personal information with third parties, except in the following limited cases:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>
                            <span className="font-normal text-neutral-600">Service providers</span> — trusted providers (Clerk, Supabase) that process data on our behalf to operate the App
                        </li>
                        <li>
                            <span className="font-normal text-neutral-600">Legal requirements</span> — if required by law or to protect the rights and safety of users or the public
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">7. Your Rights</h2>
                    <p className="mb-3">You have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Access the personal data we hold about you</li>
                        <li>Request correction of inaccurate data</li>
                        <li>Request deletion of your account and associated data</li>
                        <li>Export your workout data</li>
                    </ul>
                    <p className="mt-3">To exercise any of these rights, please contact us.</p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">8. Cookies</h2>
                    <p>Elevate uses cookies and similar technologies solely for authentication and session management. We do not use tracking or advertising cookies.</p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">9. Children's Privacy</h2>
                    <p>
                        Elevate is not intended for users under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal
                        data, please contact us so we can remove it.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">10. Changes to This Policy</h2>
                    <p>
                        We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page. Your continued use of the App
                        after changes constitutes your acceptance of the updated policy.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">11. Contact</h2>
                    <p>If you have any questions or concerns about this Privacy Policy or how your data is handled, please contact us. We take your privacy seriously and will respond promptly.</p>
                </section>
            </div>
        </div>
    </div>
));

export default PrivacyPage;
