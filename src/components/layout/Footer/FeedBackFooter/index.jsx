import { Button, TextField } from '@mui/material';
import TextArea from 'antd/es/input/TextArea';
import React, { useState } from 'react';

export default function FeedBackFooter() {
  const [feedback, setFeedback] = useState(false);

  const hadleFeedBackOpen = () => setFeedback(true);
  const hadleFeedBackClose = () => setFeedback(false);
  return (
    <div className="flex-1 flex flex-col items-center gap-3 ">
      {feedback ? (
        <div className=" w-full flex flex-col items-center">
          <span>Share your feedback with us...!!!</span>
          <form className="flex flex-col gap-3 w-full">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
            />
            <TextField
              className="w-full"
              id="filled-basic"
              label="Phone Number"
              variant="filled"
            />
            <TextArea
              className="w-full"
              id="standard-basic"
              placeholder="Please share your feedback with us"
            />
            <div className="flex gap-3">
              <Button variant="outlined" className="w-full">
                Send Feedback
              </Button>
              <Button
                variant="outlined"
                className="w-full"
                onClick={hadleFeedBackClose}
              >
                Close
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          variant="outlined"
          className=" hover:text-[--primary-color] w-full"
          onClick={hadleFeedBackOpen}
        >
          Feedback
        </Button>
      )}
    </div>
  );
}
