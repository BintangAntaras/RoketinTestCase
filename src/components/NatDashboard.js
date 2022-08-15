const NatDashboard = ({ userData }) => {
    const differentNationality =
        userData &&
        new Set(
            userData.map((user) => {
                return user.nat.toLowerCase();
            })
        ).size;
    return (
        <div>
            <p>{differentNationality}</p>
            <p>Different Nationality</p>
        </div>
    );
};

export default NatDashboard;
