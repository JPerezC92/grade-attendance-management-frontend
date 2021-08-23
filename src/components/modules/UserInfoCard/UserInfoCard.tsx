import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import { UserAvatar } from 'src/components/common';
import styles from './UserInfoCard.module.scss';

interface UserInfoCardProps {
  user: { firstname: string; lastname: string; email: string };
}

export const UserInfoCard: React.FC<UserInfoCardProps> = ({ user }) => {
  return (
    <Card className={styles.userInfoCard}>
      <CardMedia>
        <UserAvatar className={styles.userInfo__userAvatar} />
      </CardMedia>
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
