import { Footer, FooterCopyright, FooterIcon} from 'flowbite-react';
import {BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';


const CustomeFooter = () => (
            <Footer className={'fixed bottom-0'} bgDark>
                <div className="w-full">
                    <div className="w-full bg-gray-100 dark:bg-gray-900 px-4 py-6 sm:flex sm:items-center sm:justify-between">
                        <FooterCopyright href="#" by="Flowbite™" year={2022}/>
                        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                            <FooterIcon href="#" icon={BsFacebook}/>
                            <FooterIcon href="#" icon={BsInstagram}/>
                            <FooterIcon href="#" icon={BsTwitter}/>
                            <FooterIcon href="#" icon={BsGithub}/>
                            <FooterIcon href="#" icon={BsDribbble}/>
                        </div>
                    </div>
                </div>
            </Footer>
    )

export default CustomeFooter;