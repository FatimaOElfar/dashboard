import Card from "react-bootstrap/Card";

export const CardDashboard = ({bgColor, icon, number, numberActive, title}) => {
    return (
        <Card className='cards-dashboard' border='none'>
                            <span className='cards-icon' style={{
                                backgroundColor: `${bgColor}`,
                            }}>
                                {icon}
                            </span>
            <h6>{title}</h6>
            <div className='spans-dashboard'>
                <span className='fw-bold fs-5 me-1 text-card'>{numberActive}</span>
                <span className='color-dashboard me-1'>/</span>
                <span className='color-dashboard'>{number}</span>
            </div>
        </Card>
    )
}