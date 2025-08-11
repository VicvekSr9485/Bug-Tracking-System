import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsFacebook,
} from "react-icons/bs";

export default function AppFooter() {
  return (
    <Footer container className="bg-white dark:bg-gray-900 rounded-none">
      <div className="w-full max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <FooterBrand
              href="/"
              src="/favicon.png"
              alt="BugTracker Logo"
              name="BugTracker"
              className="text-center md:text-left"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-auto">
            <div>
              <FooterTitle title="Product" className="text-sm" />
              <FooterLinkGroup col>
                <FooterLink href="/projects" className="text-sm">Projects</FooterLink>
                <FooterLink href="/issues" className="text-sm">Issues</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Company" className="text-sm" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-sm">About</FooterLink>
                <FooterLink href="#" className="text-sm">Contact</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Legal" className="text-sm" />
              <FooterLinkGroup col>
                <FooterLink href="#" className="text-sm">Privacy Policy</FooterLink>
                <FooterLink href="#" className="text-sm">Terms & Conditions</FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider className="my-6" />
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <FooterCopyright
            href="https://github.com/your-org-or-profile"
            by="BugTracker™"
            year={new Date().getFullYear()}
            className="text-sm"
          />
          <div className="flex space-x-6">
            <FooterIcon href="#" icon={BsFacebook} className="hover:text-blue-600" />
            <FooterIcon href="#" icon={BsTwitter} className="hover:text-blue-400" />
            <FooterIcon href="#" icon={BsGithub} className="hover:text-gray-700 dark:hover:text-gray-300" />
            <FooterIcon href="#" icon={BsLinkedin} className="hover:text-blue-700" />
          </div>
        </div>
      </div>
    </Footer>
  );
}