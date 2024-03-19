import PropTypes from "prop-types"
const UserLayout = ({children}) => {
    return(
        <div>
            <header>
                Header
            </header>
            <main>
                {children}
            </main>
            <footer>
                Footer
            </footer>
        </div>
    )
}
UserLayout.propTypes = {
    children:PropTypes.node.isRequired
}
export default UserLayout