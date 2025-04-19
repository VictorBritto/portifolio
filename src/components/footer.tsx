import '../styles/navbar.css';

export function Footer(){
    return (
        <footer className="flex items-center justify-center py-4 text-white">
          <div className="flex items-center space-x-4">
            <span className="text-sm">Victor Gabriel © 2025</span>
            <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full text-sm hover:bg-blue-500 hover:text-black transition">
              Portfólio em desenvolvimento
            </button>
          </div>
        </footer>
      );
}