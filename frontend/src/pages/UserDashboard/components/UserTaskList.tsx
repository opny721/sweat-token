import { Button, CircularProgress, List, ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import { useQuery } from 'react-query'
import { AxiosError } from 'axios'
import { TaskDto } from '../../../api/openapi'
import { findTasks, findUserTasks } from '../../../api'

export default function UserTaskList() {
  const { isLoading, isError, isFetching, data, refetch } = useQuery<unknown, AxiosError, TaskDto[]>('userTasks', () =>
    findUserTasks()
  )
  return isLoading || isFetching ? (
    <CircularProgress />
  ) : isError ? (
    <Box>
      Failed to load.{' '}
      <Button onClick={() => refetch()} aria-label="retry">
        Retry
      </Button>
    </Box>
  ) : (
    <Box>
      {data && data.length ? (
        <List>
          {data.map((r) => (
            <ListItem>
              <ListItemText>
                {r.name} - {r.type} - {r.deadline}
              </ListItemText>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>No tasks yet.</p>
      )}
    </Box>
  )
}
