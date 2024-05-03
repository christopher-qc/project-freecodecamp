import { Header } from "./Header";
import "../stylesheet/Error.css";

export function Error() {
  return (
    <div className="content-error">
      <Header />
      <div className="container">
        <img 
        src="https://static.vecteezy.com/system/resources/thumbnails/024/217/744/small_2x/design-template-for-web-page-with-404-error-isometric-page-not-working-error-png.png" 
        alt="error"
        className="img-error"/>
      </div>
    </div>
    );
}