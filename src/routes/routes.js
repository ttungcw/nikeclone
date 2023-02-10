// Layouts

// Pages
import Home from '../components/Pages/Home/Home';
import Explore from '../components/Pages/Explore/Explore';
import Reels from '../components/Pages/Reels/Reels';
import Message from '../components/Pages/Message/Message';

// Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/explore', component: Explore },
    { path: '/reels', component: Reels },
    { path: '/message', component: Message },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
