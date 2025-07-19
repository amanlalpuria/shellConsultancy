import { Linkedin, Instagram } from 'lucide-react';
import { withBasePath } from '@/utils/prefix';

export function FooterSection() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              
              <img
                src={withBasePath('/shelllogo.jpg')}
                alt="Shell Consultancy"
                className="w-40 h-20 object-cover"
              />

              {/* <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">

              </div> */}
              {/* <span className="text-xl font-bold">Shell Consultancy</span> */}
            </div>
            <p className="text-gray-400 mb-4">Talent. Trained. Transformed.</p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/shell-consultancy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/shellconsultancy7128"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-6 h-6 hover:scale-110 transition-transform cursor-pointer" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Permanent Recruitment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contract Staffing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Executive Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Volume Hiring
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Training</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  IT Languages
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Project Training
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 Shell Consultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
