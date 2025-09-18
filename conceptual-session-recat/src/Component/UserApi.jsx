import React, { use } from 'react';
import Display from './Display';

const UserApi = ({user}) => {
    const useraApi = use(user);
    console.log(useraApi)
    return (
        <div>
            {
                useraApi.map(element => <Display element={element}></Display>)
            }

        </div>
    );
};

export default UserApi;