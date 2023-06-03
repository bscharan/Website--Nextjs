import Head from 'next/head';
import Logo from '@/components/logo';

export default function FirstPost() {
    return (
        <div>
            <Head>
                <title>Swiftpad - Privacy Policy</title>
            </Head>
            <main className="bg-white text-slate-600 italic bg-cover min-h-screen py-3">
                <section className="bg-white bg-opacity-30 text-slate-600 shadow-2xl rounded-lg mx-2 sm:mx-6 md:mx-24 lg:mx-48 ">
                    <div className="mx-auto w-1/4" ><Logo /></div>

                    <div className='border-b-4 border-t-2 border-dotted border-[#c02c38] py-2 my-2'>
                        <div className=""><img src="/SwiftPad_Banner.png" className='mx-auto shadow rounded' alt='SwiftPad Android Application banner '></img></div>
                    </div>

                    <PrivacyPolicy />

                    <div className="container mx-auto pt-3 pb-1 m-1 text-center text-[#c02c38] ">
                        &copy; bscharan
                    </div>
                </section>
            </main>

        </div>
    );
}


function PrivacyPolicy() {
    return (
        < div className='p-4 m-4'>
            < strong className='text-[#c02c38]' > Privacy Policy for Using Swiftpad Formerly MyIdeaJournal</ strong>
            <p className='px-4 mx-4'>
                bscharan built the SwiftPad app as a Free app. This SERVICE is provided by bscharan at no cost and is intended for use as is.
            </p>
            <p className='px-4 mx-4' >
                This page is used to inform visitors regarding my policies with the collection, use, and disclosure of Personal Information if anyone decided to use my Service.
            </p>
            <p className='px-4 mx-4' >
                If you choose to use my Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that I collect is used for providing and improving the Service. I will not use or share your information with anyone except as described in this Privacy Policy.
            </p>
            <p className='px-4 mx-4' >
                The terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, which is accessible at SwiftPad unless otherwise defined in this Privacy Policy.
            </p>
            <strong className='text-[#c02c38]'>Information Collection and Use</strong>
            <p className='px-4 mx-4' >
                For a better experience, while using our Service, I may require you to provide us with certain personally identifiable information, including but not limited to Camera, Microphone . The information that I request will be retained on your device and is not collected by me in any way.
            </p>

            <p className='px-4 mx-4' >
                The app does use third party services that may collect information used to identify you.
            </p>
            <p className='px-4 mx-4' >
                Link to privacy policy of third party service providers used by the app
                <ul className='list-disc px-4 mx-4'>
                    <li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li>
                </ul>
            </p>

            <strong className='text-[#c02c38]' >Log Data</strong>
            <p className='px-4 mx-4' >
                I want to inform you that whenever you use my Service, in a case of an error in the app I collect data and information (through third party products) on your phone called Log Data. This Log Data may include information such as your device Internet Protocol (“IP”) address, device name, operating system version, the configuration of the app when utilizing my Service, the time and date of your use of the Service, and other statistics.
            </p>
            <strong className='text-[#c02c38]' >Cookies</strong>
            <p className='px-4 mx-4' >
                Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.
            </p>
            <p className='px-4 mx-4' >
                This Service does not use these “cookies” explicitly. However, the app may use third party code and libraries that use “cookies” to collect information and improve their services. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your device. If you choose to refuse our cookies, you may not be able to use some portions of this Service.
            </p>
            <strong className='text-[#c02c38]' >Service Providers</strong>
            <p className='px-4 mx-4' >
                I may employ third-party companies and individuals due to the following reasons:
                <ul className='list-disc px-4 mx-4'>
                    <li>To facilitate our Service;</li>
                    <li>To provide the Service on our behalf;</li>
                    <li>To perform Service-related services; or</li>
                    <li>To assist us in analyzing how our Service is used.</li>
                </ul>
            </p>
            <p className='px-4 mx-4' >
                I want to inform users of this Service that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose.
            </p>
            <strong className='text-[#c02c38]' >Security</strong>
            <p className='px-4 mx-4' >
                I value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and I cannot guarantee its absolute security.
            </p>
            <strong className='text-[#c02c38]' >Links to Other Sites</strong>
            <p className='px-4 mx-4' >
                This Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by me. Therefore, I strongly advise you to review the Privacy Policy of these websites. I have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
            </p>
            <strong className='text-[#c02c38]' >Children’s Privacy</strong>
            <p className='px-4 mx-4' >
                These Services do not address anyone under the age of 13. I do not knowingly collect personally identifiable information from children under 13 years of age. In the case I discover that a child under 13 has provided me with personal information, I immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact me so that I will be able to do necessary actions.
            </p>
            <strong className='text-[#c02c38]' >Changes to This Privacy Policy</strong>
            <p className='px-4 mx-4' >
                I may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. I will notify you of any changes by posting the new Privacy Policy on this page.
            </p>

            <strong className='text-[#c02c38]' >Modification History</strong>
            <p className='px-4 mx-4' >This policy is effective as of 2021-07-14
                <ul className='list-disc px-4 mx-4'>
                    <li>2023-06-03 : fix typos, page formatting</li>
                </ul>
            </p>
            <strong className='text-[#c02c38]' >Contact Us</strong>
            <p className='px-4 mx-4' >
                If you have any questions or suggestions about my Privacy Policy, do not hesitate to contact me at mail@bscharan.com.
            </p>
            <p className='px-4 mx-4' >This privacy policy page was created at <a href="https://privacypolicytemplate.net" target="_blank"
                rel="noopener noreferrer">privacypolicytemplate.net </a>and modified/generated by <a
                    href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App
                    Privacy Policy Generator</a></p>
        </div>
    )
}