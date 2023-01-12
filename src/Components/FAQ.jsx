import React from 'react'

const FAQ = () => {
    return (
        <><section class="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
            <img class="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="flaro-assets/images/faqs/gradient.svg" alt="" />
            <div class="relative z-10 container px-4 mx-auto ">
                <div class="md:max-w-4xl mx-auto">
                    <h2 class="mb-16 text-lg md:text-xl xl:text-4xl text-center font-bold tracking-px-n leading-none">Frequently Asked Questions</h2>
                    <div className="accordion-group">
                        <div className="accordion">
                            <input type="checkbox" id="accordion-1" className="accordion-toggle" />
                            <label htmlFor="accordion-1" className="accordion-title">What programming languages do you support?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">Our platform supports a wide range of programming languages including C++, Java, Python, JavaScript, and more.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-2" className="accordion-toggle" />
                            <label htmlFor="accordion-2" className="accordion-title">How do I create an account?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">You can create an account by clicking on the "Sign Up" button on the website and filling in the required information.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-3" className="accordion-toggle" />
                            <label htmlFor="accordion-3" className="accordion-title">How do I reset my password?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">You can reset your password by clicking on the "Forgot Password" link on the login page and following the prompts.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-4" className="accordion-toggle" />
                            <label htmlFor="accordion-4" className="accordion-title">What is the cost of using the platform?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">Our platform offers a free version and a paid version with additional features. Please check our pricing page for more information.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-5" className="accordion-toggle" />
                            <label htmlFor="accordion-5" className="accordion-title">Are there any age restrictions for using the platform?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">Users of all ages are welcome to use our platform, but we recommend it for those above 13 years of age.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-6" className="accordion-toggle" />
                            <label htmlFor="accordion-6" className="accordion-title">How can I contact customer support?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">You can contact customer support by sending an email to support@yourwebsite.com or using the contact form on the website.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-7" className="accordion-toggle" />
                            <label htmlFor="accordion-7" className="accordion-title">How do I cancel my subscription?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">You can cancel your subscription by logging into your account and going to the "Billing" section.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-8" className="accordion-toggle" />
                            <label htmlFor="accordion-8" className="accordion-title">Is my personal information secure on the platform?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">We take the security of your personal information very seriously and use industry-standard security measures to protect it.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-9" className="accordion-toggle" />
                            <label htmlFor="accordion-9" className="accordion-title">Can I access the platform from my mobile device?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">Yes, our platform is fully compatible with mobile devices, and you can access all of its features from your mobile browser.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-10" className="accordion-toggle" />
                            <label htmlFor="accordion-10" className="accordion-title">Can I collaborate with other users on the platform?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">es, our platform includes tools for collaborating with other users on coding projects.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-11" className="accordion-toggle" />
                            <label htmlFor="accordion-11" className="accordion-title">Can I download the tutorials and exercises?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">Yes, you can download the tutorials and exercises in pdf format.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-12" className="accordion-toggle" />
                            <label htmlFor="accordion-12" className="accordion-title">Are there any certifications that I can earn?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">Yes, we offer certifications for different courses and programs that are available on our platform.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-13" className="accordion-toggle" />
                            <label htmlFor="accordion-13" className="accordion-title">How do I submit my code for evaluation?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">You can submit your code for evaluation by clicking on the "submit" button and following the prompts.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-14" className="accordion-toggle" />
                            <label htmlFor="accordion-14" className="accordion-title">How long does it take to get the evaluation results?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">The evaluation results will be available immediately after the code is submitted, depends on the complexity of the code.</div>
                            </div>
                        </div>
                        <div className="accordion">
                            <input type="checkbox" id="accordion-15" className="accordion-toggle" />
                            <label htmlFor="accordion-15" className="accordion-title">How can I track my progress?</label>
                            <div className="accordion-content">
                                <div className="min-h-0">You can track your progress by going to the "Progress" tab in your account settings.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default FAQ