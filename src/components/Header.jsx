import "../stylesheet/Header.css";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <div className="header">
            <Link to="/">
                <i class="bi bi-arrow-left-short"></i>
            </Link>
            
        </div>
    );
}