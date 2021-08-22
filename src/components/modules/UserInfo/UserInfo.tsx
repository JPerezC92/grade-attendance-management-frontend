import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { Avatar } from 'src/components/common/Avatar/Avatar';
import styles from './UserInfo.module.scss';

interface UserInfo {
  user: { firstname: string; lastname: string; email: string };
}

export const UserInfo: React.FC<UserInfo> = ({ user }) => {
  return (
    <Card className={styles.userInfoCard}>
      <CardMedia component={Avatar} />
      <CardContent>
        <Typography variant="h5" color="textPrimary" align="center">
          {user.firstname}
        </Typography>
        <Typography variant="h6" color="textSecondary" align="center">
          {user.email}
        </Typography>
      </CardContent>
    </Card>
  );
};
