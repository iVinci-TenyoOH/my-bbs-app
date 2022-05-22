import { Avatar, Paper, PaperProps, Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogActions, IconButton } from "@mui/material";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import Creatable from "react-select/creatable";

interface Prop {
  isOpen: boolean;
  handleCreatePostModalOpen: () => void;
}

interface FormValues {
  content: string;
  tag: {
    value: string;
    label: string;
  };
}

const CreatePostModal: React.FunctionComponent<Prop> = (props) => {
  const { isOpen, handleCreatePostModalOpen } = props;

  const TempDraggable: any = Draggable;
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      content: "",
      tag: { value: "旅行", label: "旅行" },
    },
  });
  function PaperComponent(props: PaperProps) {
    return (
      <TempDraggable handle="#draggable-dialog-title" cancel={'[class*="MuiDialogContent-root"]'}>
        <Paper {...props} sx={{ width: '100%' }} />
      </TempDraggable>
    );
  }
  const onSubmit:SubmitHandler<FormValues> = (data) => {
    console.log(data);
    handleCreatePostModalOpen();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleCreatePostModalOpen}
      PaperComponent={PaperComponent}
      aria-labelledby="draggable-dialog-title"
      //selectのドロップダウンがすべて表示されるために設定する
      sx={{ "& .MuiPaper-root": { overflowY: "visible" } }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <DialogTitle id="draggable-dialog-title">投稿新規作成</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCreatePostModalOpen}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <FontAwesomeIcon icon={faClose}></FontAwesomeIcon>
        </IconButton>
        <DialogContent dividers sx={{ overflowY: "visible" }}>
          <Box sx={{ display: "flex" }}>
            <Avatar sx={{ bgcolor: "pink", mr: 1 }}>W</Avatar>
            <Box sx={{ flex: 1 }}>
              <Controller render={({ field }) => <TextField {...field} multiline rows={4} fullWidth sx={{ mb: 2 }} placeholder="なにかをつぶやく..." />} name="content" control={control} />
              <Controller
                name="tag"
                render={({ field }) => (
                  <Creatable
                    {...field}
                    isMulti
                    placeholder="タグをつけよう..."
                    options={[
                      { value: "旅行", label: "旅行" },
                      { value: "グルメ", label: "グルメ" },
                      { value: "コーディング", label: "コーディング" },
                    ]}
                  />
                )}
                control={control}
              />
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button type="submit">送信</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default CreatePostModal;
