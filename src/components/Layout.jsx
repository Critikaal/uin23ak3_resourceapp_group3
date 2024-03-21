import Header from './Header'
import Resources from './Resources'
import Links from "./Links";

export default function Layout(){
return (
    <>
    <div id="center-box">
        <Header/>
        <div id="main-content">
            <Resources/>
            <Links/>
        </div>
      </div>
    </>
  );
}
