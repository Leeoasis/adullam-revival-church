import React from "react";

const Footer = () => (
  <footer className="bg-[#583030] text-[#f5f5ed] py-10 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      
      <p className="text-sm text-center md:text-left">
        &copy; {new Date().getFullYear()} Adullam Revival Church. All rights
        reserved.
      </p>

      <div className="flex space-x-6 text-sm">
        <a
          href="https://www.facebook.com/profile.php?id=61578577871452"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 transition"
        >
          Facebook
        </a>

        <a
          href="https://www.instagram.com/adullam.revival"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 transition"
        >
          Instagram
        </a>

        <a
          href="https://www.youtube.com/@AdullamRevivalChurch/videos"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline underline-offset-4 transition"
        >
          YouTube
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
