import { FunctionComponent, memo } from "react";

const TermsPage: FunctionComponent = memo(() => (
    <div className="min-h-screen bg-white text-neutral-900 pt-28 md:pt-24">
        <div className="container mx-auto px-8 py-8 max-w-2xl">
            <div className="mb-12">
                <h1 className="text-3xl md:text-4xl font-light tracking-tight mb-3">Terms of Service</h1>
                <p className="text-neutral-400 text-sm">Last updated: March 22, 2026</p>
            </div>

            <div className="space-y-10 text-neutral-500 leading-relaxed font-light">
                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">1. Acceptance of Terms</h2>
                    <p>By accessing or using Elevate ("the App"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the App.</p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">2. Description of Service</h2>
                    <p>
                        Elevate is a workout and fitness tracking application that allows users to log exercises, track workout history, and monitor their fitness progress. Features include exercise
                        libraries, workout logging, and performance analytics.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">3. Account Registration</h2>
                    <p>
                        You must create an account to use Elevate. You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your
                        account. You agree to provide accurate and complete information when registering.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">4. Acceptable Use</h2>
                    <p className="mb-3">You agree not to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Use the App for any unlawful purpose or in violation of these Terms</li>
                        <li>Attempt to gain unauthorized access to any part of the App or its systems</li>
                        <li>Interfere with or disrupt the integrity or performance of the App</li>
                        <li>Upload or transmit any harmful, offensive, or malicious content</li>
                        <li>Reverse engineer or attempt to extract the source code of the App</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">5. Health Disclaimer</h2>
                    <p>
                        Elevate is a tracking tool only and does not provide medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional before beginning any exercise
                        program. We are not responsible for any injuries or health issues that may arise from your use of the App.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">6. Your Data</h2>
                    <p>
                        You retain ownership of the workout data and content you create in Elevate. By using the App, you grant us a limited license to store and process your data solely to provide
                        the service. See our{" "}
                        <a href="/privacy" className="underline hover:text-neutral-900 transition-colors">
                            Privacy Policy
                        </a>{" "}
                        for details on how we handle your data.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">7. Intellectual Property</h2>
                    <p>
                        All content, features, and functionality of the App — including but not limited to design, logos, and software — are owned by Elevate and protected by applicable intellectual
                        property laws. You may not reproduce or distribute any part of the App without our express written permission.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">8. Termination</h2>
                    <p>
                        We reserve the right to suspend or terminate your account at any time for violations of these Terms or for any other reason at our discretion. You may also delete your account
                        at any time. Upon termination, your right to use the App will immediately cease.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">9. Limitation of Liability</h2>
                    <p>
                        To the fullest extent permitted by law, Elevate shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or
                        inability to use the App.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">10. Changes to Terms</h2>
                    <p>
                        We may update these Terms from time to time. We will notify you of significant changes by updating the date at the top of this page. Continued use of the App after changes
                        constitutes acceptance of the updated Terms.
                    </p>
                </section>

                <section>
                    <h2 className="text-sm font-medium text-neutral-900 mb-3 uppercase tracking-wider">11. Contact</h2>
                    <p>If you have any questions about these Terms, please contact us. We are happy to address any concerns you may have about your use of Elevate.</p>
                </section>
            </div>
        </div>
    </div>
));

export default TermsPage;
