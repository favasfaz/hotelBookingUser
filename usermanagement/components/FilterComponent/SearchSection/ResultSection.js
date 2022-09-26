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

function ResultSection({data}) {
  return (
    <div className="sm:w-3/5 bg-white shadow-lg p-0 sm:p-6">
      <h4 className="text-2xl"> {data.length} properties found</h4>
      {/* <div>
        <FormControl className="w-56">
          <InputLabel id="language-label">Category</InputLabel>
          <Select size="mediam" labelId="language-label" id="language" value="">
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"de"}>German</MenuItem>
            <MenuItem value={"ru"}>Russian</MenuItem>
          </Select>
        </FormControl>
      </div> */}

      {data && data.length >0 ?<Card elevation={10} className="flex-col my-3">
        {
          data.map((v)=>(
            <div className="flex items-center justify-between">
<div className="w-44 my-2">
          <Image
            layout="fixed"
            src={v.imageUrls[0]}
            className="rounded-lg"
            height="200"
            width="200"
            alt="categoryImage"
          />
        </div>
          <div className="mr-auto ml-10">
            <h2>{v.name}</h2>
            <p>{v.city}</p>
            <h4>{v.phone}</h4>
          </div>
          <div className="mt-3">
            <h2>Review Score</h2>
            <p>total Reviews</p>
            <Button size="small" variant="outlined">
              View
            </Button>
          </div>
          </div>
          ))
        }

      </Card>:<h1 className="mt-14 text-red-900 font-bold">No data found</h1>}
      {/* <Card elevation={10} className=" flex justify-between">
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
    </Card> */}
    </div>
  );
}

export default ResultSection;
