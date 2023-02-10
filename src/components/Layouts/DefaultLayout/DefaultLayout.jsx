import Sidebar from '../LayoutComponents/Sidebar/Sidebar';

function DefaultLayout({ children }) {
    return (
        <div>
            <Sidebar />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
