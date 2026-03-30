import React from "react";
import '../assets/styles/Contact.scss';

import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function Contact() {
    const email = "muhamadilhamsutrisna1997@gmail.com";
    const whatsapp = "6285795885994";
    const linkedin = "https://www.linkedin.com/in/muhamad-ilham-sutrisna/";
    const github = "https://github.com/ilham1997";
    const cvLink = "/cv.pdf";

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        alert("Email copied to clipboard!");
    };

    return (
        <section id="contact">
            <div className="items-container">
                <div className="contact-wrapper">
                    <h1>Contact</h1>

                    <div className="contact-buttons">
                        {/* Email Row */}
                        <div className="contact-row">
                            <Button
                                variant="outlined"
                                startIcon={<EmailIcon />}
                                href={`mailto:${email}`}
                                className="contact-btn"
                                fullWidth
                            >
                                {email}
                            </Button>
                            <Button
                                variant="outlined"
                                onClick={copyEmail}
                                className="copy-btn"
                                aria-label="Copy email"
                            >
                                <ContentCopyIcon />
                            </Button>
                        </div>

                        {/* WhatsApp */}
                        <Button
                            variant="outlined"
                            startIcon={<WhatsAppIcon />}
                            href={`https://wa.me/${whatsapp}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn"
                            fullWidth
                        >
                            WhatsApp
                        </Button>

                        {/* LinkedIn */}
                        <Button
                            variant="outlined"
                            startIcon={<LinkedInIcon />}
                            href={linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn"
                            fullWidth
                        >
                            LinkedIn
                        </Button>

                        {/* GitHub */}
                        <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-btn"
                            fullWidth
                        >
                            GitHub
                        </Button>

                        {/* Download CV */}
                        <Button
                            variant="outlined"
                            startIcon={<DownloadIcon />}
                            href={cvLink}
                            download
                            className="contact-btn"
                            fullWidth
                        >
                            Download CV / Resume
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;