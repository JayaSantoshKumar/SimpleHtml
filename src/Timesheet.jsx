import React from "react";
import './css/main.css';

function Timesheet(){
   return  <div className="App">
        <div className="left">
            <div className="l_topbox">
               <img className="img_logo" src={require('./images/logo.png').default} alt="gy" />
            </div>
        </div>
        <div className="right">
           <div className="r_topic_h f_fontheader">  
               Timesheets              
           </div>
           <div className="r_topic_desc f_fontdesc">
               As a project team member or staff, you are responsible for tracking the number of hours that you work on specific tasks and submitting a timesheet. 

               Tracking work time using timesheets allows companies to plan budgets for complex projects, track the allocation of resources, implement charge codes, and so on.

               Depending on the policy at your company, your manager might also want you to track the hours you spend on tasks under various charge codes and input methods. As an application user, you track your working hours using timesheets. Your resource manager is responsible for managing the time recording of their direct reports. 
Timesheets are available in Clarity, Classic PPM, and in our mobile app. Your administrator or manager can advise you which options are available at your organization.
            </div>
           <div className="r_topic_h f_fontheader">
               Navigation
           </div>
            <div className="r_nav">
                <font size="4"> Navigation :- Home -- Timesheets </font>
                <font size="4"> <a href="www.google.com"> Click here for Image </a> </font>
                <img className="r_nav_img" src={require('./images/timesheets.png').default} alt="timesheetsImg" ></img>
            </div>
            <div className="r_access">
                Resource Enter Time access is needed to have this view for a resource/user.
          </div>
            <div className="r_tables">
                Tables used in this view are
          </div>
            <div className="r_xog">
                Can this instance be XOGed? If
          </div>
            <div className="r_query">
                Query/Code used to bring the data in this view.
          </div>
            <div className="r_process">
                Background Process related to this Timesheets are
          </div>
            <div className="r_jobs">
                background Jobs related to Timesheets
          </div>
            <div className="r_reports">
                Timesheet data related reports from Advanced reporting side.
           <p>
                
             <br></br>
             timesheet review by manager
                          <br></br>
             timesheet review by manager
          </p>
            </div>
           <div className="r_reports_app_side">
               Timesheet data related reports from Application side.
           <p>
                   Timesheet overview
             <br></br>
             Returned timesheet governance
                          <br></br>
             timesheet review by manager
          </p>
           </div>
        </div>

    </div>
}

export default Timesheet;