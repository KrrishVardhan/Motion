import { Home, BarChart3, Users, Settings, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'motion/react';

function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const links = [
        { name: "Home", icon: <Home size={20} /> },
        { name: "Analytics", icon: <BarChart3 size={20} /> },
        { name: "Users", icon: <Users size={20} /> },
        { name: "Settings", icon: <Settings size={20} /> }
    ];
    const sidebarVariant = {
        open: {
            width: "16rem"
        },
        closed: {
            width: "5rem"
        }
    }

    const listVariant = {
        open: {
            opacity: 1,
            y: 0
        },
        closed: {
            opacity: 0,
            y: -10
        }
    }

    return (
        <div className="flex">
            <motion.nav className="space-y-2 p-6 fixed left-0 top-0 h-screen bg-slate-700 text-slate-300"
                initial={false}
                animate={sidebarOpen ? "open" : "closed"}
                variants={sidebarVariant}
                transition={{
                    duration: 0.3
                }}>
                <motion.ul className='space-y-5'>
                    {links.map((l) => (
                        <motion.li key={l.name}
                        variants={listVariant}
                        >
                            <a href="#" className='flex gap-x-3 items-center text-xl'>
                                {l.icon}
                                {sidebarOpen && l.name}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
                <button
                    className='absolute top-1 right-1 cursor-pointer'
                    style={{ transform: sidebarOpen ? 'rotate(0deg)' : 'rotate(180deg)' }}
                    onClick={() => setSidebarOpen(prev => !prev)}
                >
                    <ChevronRight size={30} />
                </button>
            </motion.nav>
            <main className='flex-1 bg-slate-800 h-screen'></main>
        </div>
    );
}

export default Dashboard;