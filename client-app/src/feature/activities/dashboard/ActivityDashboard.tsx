import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "./ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { Activity } from "../../../app/models/activity";

interface Props {
    activities: Activity[],
    selectedActivity: Activity | undefined,
    selectActivity: (id: string) => void,
    cancelSelectActivity: () => void,
    editMode: boolean,
    openForm: (id: string) => void,
    closeForm: () => void,
    createOrEdit: (activity: Activity) => void,
    deleteActivity: (id: string) => void,
    submiting: boolean
}

export default function ActivityDashboard({ activities, selectActivity, selectedActivity, cancelSelectActivity, openForm, closeForm, editMode, createOrEdit, deleteActivity, submiting }: Props) {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} submiting={submiting}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {selectedActivity && !editMode &&
                    <ActivityDetails activity={selectedActivity} cancelSelectedActivity={cancelSelectActivity}
                        openForm={openForm} />}
                {editMode &&
                    <ActivityForm closeForm={closeForm} activity={selectedActivity} createOrEdit={createOrEdit} submiting={submiting} />}
            </Grid.Column>
        </Grid>
    )
}