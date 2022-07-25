import {Avatar, Button, Card} from "@mui/material";

export const UserListItem = (props) => {
    const userProps = props.user;
    const searchedText = props.text;
    let text = `<span>${userProps.login}</span>`;
    if (searchedText && searchedText != ' ' && searchedText.length > 1) {
        text = text.replace(searchedText, `<span style='background-color: yellow;'>${searchedText}</span>`)
    }
    return(
    <Card style={{ display:'flex', alignItems:'center',justifyContent:'space-around',width:"50%",margin:"10px"}}>
        <Avatar  alt={userProps.login} src={userProps.avatar_url} />
        <h4 style={{  flexBasis: "20%"}}><span dangerouslySetInnerHTML={{ __html: text }} /></h4>
        <Button  variant={"contained"} color={"success"} onClick={()=>props.callback(text)}>View Repos</Button>
    </Card>
    )
}