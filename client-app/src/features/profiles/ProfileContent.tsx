import React from 'react';
import { Tab } from 'semantic-ui-react';
import ProfilePhotos from './ProfilePhotos';
import { Profile } from '../../app/models/profile';
import { observer } from 'mobx-react-lite';
import ProfileFollowings from './ProfileFollowings';
import { useStore } from '../../app/stores/store';
import ProfileActivities from './ProfileActivities';
import ProfileAbout from './ProfileAbout';

interface Props {
    profile: Profile;
}

export default observer ( function ProfileContent({profile}: Props) {
    const {profileStore} = useStore();
    const panes = [
        {menuItem: 'About', render: () => <Tab.Pane><ProfileAbout /></Tab.Pane>},
        {menuItem: 'Photos', render: () => <Tab.Pane><ProfilePhotos profile={profile} /></Tab.Pane>},
        {menuItem: 'Events', render: () => <Tab.Pane><ProfileActivities /></Tab.Pane>},
        {menuItem: 'Followers', render: () => <ProfileFollowings />},
        {menuItem: 'Following', render: () =>   <ProfileFollowings />}

    ];

    return ( 
        <Tab 
            menu={{fluid: true, vertical: true}}
            menuPosition='right'
            panes={panes}
            onTabChange={(e, data) => profileStore.setActiveTab(data.activeIndex)}
        />
    )
})