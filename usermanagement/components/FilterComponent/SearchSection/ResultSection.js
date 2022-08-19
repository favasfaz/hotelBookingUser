import {
    Badge,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Image from "next/image";

function ResultSection() {
  return (
    <div className="sm:w-3/5 bg-white shadow-lg p-6">
      <h4 className="text-2xl">India: 19,570 properties found</h4>
      <div>
        <FormControl className="w-56">
          <InputLabel id="language-label">Category</InputLabel>
          <Select size="mediam" labelId="language-label" id="language" value="">
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"de"}>German</MenuItem>
            <MenuItem value={"ru"}>Russian</MenuItem>
          </Select>
        </FormControl>
      </div>

      <Card elevation={10} className="flex justify-between my-3 ">
        <div className="w-44">
          <Image
            layout="responsive"
            src="/zayn.jpeg"
            className="rounded-lg"
            height={500}
            width={500}
          />
        </div>
          <div className="sm:mr-auto m-3">
            <h2>Hotel Name</h2>
            <p>place</p>
            <h4>description</h4>
          </div>
          <div className="mt-3">
            <h2>Review Score</h2>
            <p>total Reviews</p>
            <Button size="small" variant="outlined">
              View
            </Button>
          </div>

      </Card>
      <Card elevation={10} className=" flex justify-between">
      <CardActionArea className="w-52">
      <Image
            layout="responsive"
            src="/zayn.jpeg"
            className="rounded-lg"
            height={500}
            width={500}
          />
      </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
    </Card>
    </div>
  );
}

export default ResultSection;
