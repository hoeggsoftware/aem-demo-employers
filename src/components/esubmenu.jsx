import { useEffect, useState } from 'react'
import JobSearch from "@/pages/assets/job-search";
import LostMyJob from "@/pages/assets/lost-my-job";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";



const Submenu = ({ onMenuChange }) => {

  const [active, setActive] = useState('finding-employees');

  const handleMenuChange = (menuItem) => {
    setActive(menuItem);
    onMenuChange(menuItem);
  }

    return (
      <div className="sub-menu">
        <div className="sub-menu-container">
          <div className="container">
            <h1 className="sub-menu-header">Employer</h1>
            <ul className="sub-list">
              <Card className={`sub-list-item hover ${active === 'finding-employees' ? 'sub-list-active' : ''}`} onClick={() => handleMenuChange('finding-employees')}>
                <CardContent>
                  <li>Finding and Training an Employee</li>
                </CardContent>
              </Card>
              <Card className={`sub-list-item hover ${active === 'partners' ? 'sub-list-active' : ''}`} onClick={() => handleMenuChange('partners')}>
                <CardContent>
                  <li>Becoming a Partner of the Unemployment Fund</li>
                </CardContent>
              </Card>
            </ul>
          </div>
        </div>
      </div>
    )
}


export default Submenu