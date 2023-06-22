import { Modal, Box, Button, IconButton } from '@mui/material';
import { Cancel, Close } from '@mui/icons-material';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 320,
  height: 330,
  bgcolor: 'background.paper',
  borderRadius: '4px',
  boxShadow: 24,
  p: 2.5
};

const ConfirmCancelModal = ({
  open,
  onCancel,
  onContinue
}: {
  open: boolean;
  onCancel: () => undefined;
  onContinue: () => undefined;
}) => {
  return (
    <Modal open={open} disablePortal disableEscapeKeyDown>
      <Box sx={style}>
        <div className="flex flex-col w-full h-full gap-5">
          <div className="flex flex-col justify-center flex-grow">
            <div className="flex justify-center">
              <Cancel color="error" className="w-12 h-12" />
            </div>
            <h1 className="text-red-600 text-center mt-3">ביטול נסיעה</h1>
          </div>
          <p className="text-center">האם אתה בטוח שברצונך לבטל את הנסיעה?</p>
          <Button variant="outlined" color="error" className="flex gap-2" onClick={onCancel}>
            ביטול נסיעה
          </Button>
          <Button variant="outlined" className="flex gap-2" onClick={onContinue}>
            המשך בנסיעה
          </Button>
        </div>
        <IconButton size="small" className="absolute left-2 top-1" onClick={onContinue}>
          <Close />
        </IconButton>
      </Box>
    </Modal>
  );
};

export default ConfirmCancelModal;
