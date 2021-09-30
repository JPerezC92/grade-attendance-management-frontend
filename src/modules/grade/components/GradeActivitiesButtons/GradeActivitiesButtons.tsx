import {
  Button,
  ButtonGroup,
  ListItemText,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { useModal } from 'src/hooks';
import { useAppDispatch, useAppSelector } from 'src/redux';
import WithOpenMenu from 'src/shared/components/WithOpenMenu';
import { startLoadingCurrentlyGrading } from '../../reducer';
import GradingScoreDialog from '../GradingScoreDialog';
import styles from './GradeActivitiesButtons.module.scss';

const GradeActivitiesButtons: React.FC = () => {
  const {
    activityReducer: { activities },
    gradeReducer: { currentlyGrading },
  } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const modal = useModal();

  return (
    <>
      <ButtonGroup
        variant="contained"
        color="primary"
        style={{ alignSelf: 'flex-start' }}
      >
        {activities.map((activity) => (
          <WithOpenMenu
            key={activity.id}
            TriggerElement={({ handleOpenMenu, ...rest }) => (
              <Button onClick={handleOpenMenu} {...rest}>
                {activity.name}
              </Button>
            )}
            Menu={({ anchorElement, handleCloseMenu }) => (
              <Menu
                className={styles.menu}
                elevation={0}
                getContentAnchorEl={null}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                id="customized-menu"
                keepMounted
                anchorEl={anchorElement.value}
                open={anchorElement.isSet}
                onClose={handleCloseMenu}
              >
                {activity.scores.map((score) => (
                  <MenuItem
                    key={score.id}
                    style={{ minWidth: '10em' }}
                    component="button"
                    onClick={async () => {
                      handleCloseMenu();
                      await dispatch(
                        startLoadingCurrentlyGrading(score, activity)
                      );
                      modal.handleOpenModal();
                    }}
                  >
                    <ListItemText>{score.name}</ListItemText>
                  </MenuItem>
                ))}
              </Menu>
            )}
          />
        ))}
      </ButtonGroup>

      {modal.isOpen && currentlyGrading.isLoaded && (
        <GradingScoreDialog modal={modal} />
      )}
    </>
  );
};

export default GradeActivitiesButtons;
