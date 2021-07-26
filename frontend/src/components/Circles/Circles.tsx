import { useLocation, useHistory } from "react-router";
import { ReactComponent as Arrow } from "../../assets/arrow.svg";
import "./Contribute.css";
import "./Create.css";
import "./Login.css";

export const Circles = () => {
  const history = useHistory()
  const location = useLocation()
  const loginPage = location.pathname === '/'
  const contributePage = location.pathname === '/contribute'
  const createPage = location.pathname === '/create'

  const switchPortals = () => {
    if (contributePage) history.push("/create")
    if (createPage) history.push("/contribute")
  }

  // Circle animation depends on the route
  const circleAnimation = (page: string) => {
    if (createPage) return `circle${page}_create`
    if (contributePage) return `circle${page}_contribute`
    return `circle${page}_login`
  }

  return <>
    <div className={circleAnimation("A")} />
    <button
      className={circleAnimation("B")}
      onClick={switchPortals}
      disabled={loginPage ? true : false}
    >
      {contributePage && "Create "}
      {createPage && "Donate "}
      {!loginPage && <Arrow style={{ width: "2ch", verticalAlign: "bottom" }} />}
    </button>
    <div className={circleAnimation("C")} />
  </>
}