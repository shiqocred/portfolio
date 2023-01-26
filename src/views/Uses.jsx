import React from 'react'
import Card from '../components/Card'
import Container from '../components/Container'
import Header from '../components/Header'

export default function Speaking(props) {
  return (
    <div className='sm:px-8 mt-16 sm:mt-32'>
      <Container>
        <Header>
          <Header.Title>I’ve spoken at events all around the world and been interviewed for many podcasts.</Header.Title>
          <Header.Subtitle>One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions.</Header.Subtitle>
        </Header>
        <div className="mt-16 sm:mt-20">
          <div className="space-y-20">
            {
              props.data.map(item => (
                <Card key={item.id}>
                  <Card.Title>
                    {item.title}
                  </Card.Title>
                  <Card.Container>
                    {
                      item.data.map(item => (
                        <Card.Article key={item.id}>
                          <Card.NameH3>
                            {item.name}
                          </Card.NameH3>
                          <Card.Value>{item.value}</Card.Value>
                        </Card.Article>
                      ))
                    }
                  </Card.Container>
                </Card>
              ))
            }
          </div>
        </div>
    </Container>
    </div>
  )
}
