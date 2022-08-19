export default function Header(props) {
    const {
        handleLogout
    } = props

    return (
        <div className="header">
            <ul className="list-items">
                <li>Thông tin cá nhân</li>
                <li>Điểm danh</li>
                <li>Tra cứu giờ làm</li>
                <li>Thông tin Covid cá nhân</li>
            </ul>
            <div className="sign-out" onClick={(e) => handleLogout(e)}>
                <i className="fa fa-sign-out" aria-hidden="true"></i>
            </div>
        </div>
    )
}