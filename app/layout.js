import "./globals.css";

export const metadata = {
    title: "Fahim muntasir",
    description:
        "This is my personal portfolio website. You can get me by this website!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
