import React from 'react'
import { Route } from 'react-router'
import { Grid } from 'semantic-ui-react'
import Detail from '../pages/Detail'
import EmployersList from '../pages/EmployersList'
import JobAdvertisementsList from '../pages/JobAdvertisementsList'
import PositionsList from '../pages/PositionsList'
import EmployeesList from '../pages/EmployeesList'


export default function MainDashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>

                    </Grid.Column>
                
                    <Grid.Column width={12}>
                        <Route path="/" component={MainDashboard} />
                        <Route exact path="/positions" component={PositionsList} />
                        <Route path="/positions/:name" component={Detail} />
                        <Route path="/employers" component={EmployersList} />
                        <Route path="/jobAds" component={JobAdvertisementsList} />
                        <Route path="/jobAds" component={EmployeesList} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
