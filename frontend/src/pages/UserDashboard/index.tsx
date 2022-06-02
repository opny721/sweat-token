import { Grid } from '@mui/material'
import ContentBlock from '../../components/ContentBlock'
import ContentBox from '../../components/ContentBox'
import { PageLayout } from '../../layout/Page'
import UserTaskList from './components/UserTaskList'

export default function UserDashboard() {
  return (
    <PageLayout withDrawer={false}>
      <ContentBlock title="Dashboard">
        <Grid container>
          <Grid item>
            <ContentBox title="Tasks">
              <UserTaskList />
            </ContentBox>
          </Grid>
        </Grid>
      </ContentBlock>
    </PageLayout>
  )
}
