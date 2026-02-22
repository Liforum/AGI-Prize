import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>User Dashboard</h1>
            <Tabs defaultActiveKey="voting" id="dashboard-tabs">
                <Tab eventKey="voting" title="Voting">
                    <PushForm />
                </Tab>
                <Tab eventKey="invites" title="Invites">
                    <InviteForm />
                </Tab>
                <Tab eventKey="leaderboard" title="Leaderboard">
                    <Leaderboard />
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <ProfileSection />
                </Tab>
            </Tabs>
        </div>
    );
};

const PushForm = () => {
    return <div>Push Form Content Here</div>;
};

const InviteForm = () => {
    return <div>Invite Form Content Here</div>;
};

const Leaderboard = () => {
    return <div>Leaderboard Content Here</div>;
};

const ProfileSection = () => {
    return (
        <div>
            <h2>Profile</h2>
            <div>User Rank: #1</div>
            <div>User Score: 1500</div>
            <div>Contributions: 30</div>
        </div>
    );
};

export default Dashboard;