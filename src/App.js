import React,{Component} from 'react';
import "semantic-ui-css/semantic.min.css"
import{
  Grid,
  Form,
  Table,
  Menu,
  Search,
  Label,
  Icon,
  Comment,
  Header,
  Button,
  Feed

}from "semantic-ui-react";


class App extends Component {
  render(){
    return (
      <div>
        <br />   <br />   <br />   <br />
        <Grid Content columns={2}>
          <Grid.Column width={2}>
          </Grid.Column>
          <Grid.Column width={12}>
            <Form>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell colSpan="2">
                      <Search aligned="right" placeholder="Seacrh document"/>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell textAlign="center">Nama Document</Table.HeaderCell>
                    <Table.HeaderCell textAlign="center">Jenis File</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <Label ribbon>Panduan Belajar Javascript</Label>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      PDF
                    </Table.Cell>
                  </Table.Row>

                    <Table.Row>
                      <Table.Cell>
                        Panduan Belajar CSS
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        PDF
                      </Table.Cell>
                    </Table.Row>

                    <Table.Row>
                      <Table.Cell>
                        Panduan Belajar React JS
                      </Table.Cell>
                      <Table.Cell textAlign="center">
                        PDF
                      </Table.Cell>
                  </Table.Row>
                </Table.Body>

                <Table.Footer>
                  <Table.Row>
                    <Table.HeaderCell colSpan="2">
                      <Menu floated="right"pagination>
                        <Menu.Item as='a' icon>
                          <Icon name="chevron left"/>
                        </Menu.Item>
                        <Menu.Item>1</Menu.Item>
                        <Menu.Item>2</Menu.Item>
                        <Menu.Item>3</Menu.Item>
                        <Menu.Item>4</Menu.Item>
                        <Menu.Item as='a' icon>
                          <Icon name="chevron right"/>
                        </Menu.Item>
                      </Menu>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>

            </Form>
            <br/><br />
            <Grid Content Column={3}>
              <Grid.Column width={6}>
                <Comment.Group>
                  <Header as='h3' dividing>
                    Commentar
                  </Header>
                  <Comment>
                    <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"/>
                    <Comment.Content>
                      <Comment.Author as="a">Satria</Comment.Author>
                      <Comment.Metadata>
                        <div>Yesterday at 5:42 PM</div>
                      </Comment.Metadata>
                      <Comment.Text>Hallo..!</Comment.Text>
                      <Comment.Actions>
                        <a>Replay  </a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>

                  <Comment>
                    <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
                    <Comment.Content>
                      <Comment.Author as="a">Danang</Comment.Author>
                      <Comment.Metadata>
                        <div>Today at 5:50 PM</div>
                      </Comment.Metadata>
                      <Comment.Text>Kerjakan Sesuatu Semampu Kamu</Comment.Text>
                      <Comment.Actions>
                        <a>Replay </a>
                      </Comment.Actions>
                    </Comment.Content>

                    <Comment.Group>
                     <Comment.Group>
                      <Comment>
                        <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/jenny.jpg"/>
                        <Comment.Content>
                          <Comment.Author as="a">Ricky</Comment.Author>
                          <Comment.Metadata>
                            <span>Just Now</span>
                          </Comment.Metadata>
                          <Comment.Text> Kamu Sekarang dimana Danang ?</Comment.Text>
                          <Comment.Actions>
                            <a>Replay  </a>
                          </Comment.Actions>
                        </Comment.Content>
                      </Comment>
                      </Comment.Group>
                    </Comment.Group>
                  </Comment>

                  <Comment>
                    <Comment.Avatar as="a" src="https://react.semantic-ui.com/images/avatar/small/joe.jpg"/>
                    <Comment.Content>
                      <Comment.Author as="a">Joe</Comment.Author>
                      <Comment.Metadata>
                        <span>1 Day Ago</span>
                      </Comment.Metadata>
                      <Comment.Text>Terimahkasih Atas Nasihatnya</Comment.Text>
                      <Comment.Actions>
                        <a>Replay  </a>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>

                  <Form reply>
                    <Form.TextArea />
                    <Button content='Add Reply' labelPosition='left' icon='edit' primary />
                  </Form>
                </Comment.Group>
              </Grid.Column>
              <Grid.Column width={4}>
              </Grid.Column>
              <Grid.Column width={5}>
              <Feed>
                <Feed.Event>
                  <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/elliot.jpg"/>
                  <Feed.Content>
                    <Feed.Summary>
                      <Feed.User>Anton</Feed.User> Added you as friend
                      <Feed.Date>3 Hour Ago</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      <Feed.Like>
                        <Icon name="like"/>4 likes
                      </Feed.Like>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label icon="pencil" />
                  <Feed.Content>
                    <Feed.Summary>
                      You submitted a new post to the page <br/>
                      <Feed.Date size="small">3 days ago</Feed.Date>
                      <br/>
                      Saya Senang Belajar Bahasa Pemograman
                      <br/>
                      <Feed.Meta>
                        <Feed.Like>
                          <Icon name="like"/>3 likes
                        </Feed.Like>
                      </Feed.Meta>

                    </Feed.Summary>

                  </Feed.Content>
                </Feed.Event>

                <Feed.Event>
                  <Feed.Label image="https://react.semantic-ui.com/images/avatar/small/helen.jpg" />
                  <Feed.Content>
                    <Feed.Date>4 days ago</Feed.Date>
                    <Feed.Summary>
                      David added 2 news Image

                    </Feed.Summary>
                    <Feed.Extra images>
                    <a href="http://niomic.com" target="_blink" >
                      <img src='https://s3-ap-southeast-1.amazonaws.com/niomic/img-v1/c_login_logo.png' />
                    </a>

                    <a href="https://react.semantic-ui.com/" target="_blink">
                      <img src='https://cdn-images-1.medium.com/max/1600/1*6kK9j74vyOmXYm1gN6ARhQ.png' />
                    </a>
                    </Feed.Extra>
                     <Feed.Meta>
                        <Icon name="like"/>2 likes
                     </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
