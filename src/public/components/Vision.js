import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserLayout from "../Layout";
import AboutUsLinks from "../components/AboutUsLinks";

const Vision = (props) => (
  <>
    <UserLayout src="/vision-hero.jpg" alt="vision hero image">
      <Row>
        <Col xs={12} lg={9} className="mx-auto">
          <Card className="p-2">
            <Card.Body>
              <h1>THE LOCAL CHURCH</h1>
              <p>
                God is returning the local church to the dignity of its
                foundations. God has placed everything necessary to accomplish
                His will in the setting of the local church. Ephesians 1:22-23 …
                the church, which is His body, the fullness of him who fills
                everything in every way. God’s will is accomplished in us and
                through us as we connect and commit ourselves to a local church.
                What is needed are churches that will go back to their spiritual
                roots – the Bible. There we find that each church was a
                launching pad to win the world—supporting itself, disciplining,
                training, equipping, and releasing workers into the world. Many
                think of the church as a dead institution or a meaningless
                relic, years behind the times. We believe the church is the
                Bride of Christ, the depository of Gods glory and the pillar and
                ground of truth. It is the most vital Institution on planet
                Earth. History revolves around the visible body of Christ.
              </p>
              <h1>PREACHING</h1>
              <p>
                The Bible is the guidebook of the Christian life and preaching
                is God's method of bringing it to the hearts of God’s people. We
                believe that honest, direct and anointed preaching has always
                been used by God to shake the nations. In an age of low
                commitment, many seek to hear a watered-down message, but it is
                our firm belief that God is raising up a people hungry for the
                meat of the word. That is why our order of worship is centered
                around the preaching of the gospel.
              </p>
              <h1>EVANGELISM</h1>
              <p>
                The Gospel taken outside the four walls is the absolute
                foundation of our church, in obedience to Mark 16:15 "And He
                said to them, Go into all the world and preach the gospel to
                every creature"… We emphasize personal evangelism and a large
                variety of outreaches to share the Gospel.
              </p>
              <h1>CONVERSION</h1>
              <p>
                We witness, testify and preach for a decision. The Gospel has
                the power to save and transform lives. 1 Peter 1:23 "having been
                born again, not of corruptible seed but incorruptible, through
                the word of God which lives and abides forever"… The bulk of our
                congregation consists of people converted here by the Power of
                God.
              </p>
              <h1>DISCIPLESHIP</h1>
              <p>
                God intends for calling to Him and for Him, to be accomplished
                through being trained and equipped within the setting of a local
                church. Therefore, the highest calling of a Pastor and
                congregation is to obey God’s command in Matthew 28:19-20 "Go
                therefore and make disciples of all the nations, baptizing them
                in the name of the Father and of the Son and of the Holy Spirit,
                teaching them to observe all things that I have commanded you;
                and lo, I am with you always, even to the end of the age." Amen.
              </p>
              <h1>CHURCH PLANTING</h1>
              <p>
                The result of disciples being raised up is that they are
                released into the harvest field. Matthew 9:37-38 "Then He said
                to His disciples, The harvest truly is plentiful, but the
                laborers are few. 38. Therefore pray the Lord of the harvest to
                send out laborers into His harvest." We send couples to plant
                brand new congregations, with the aim of reproducing our vision
                in a new area.
              </p>
              <h1>WORLD EVANGELISM</h1>
              <p>
                From the earliest Bible record, God’s vision is worldwide
                testimony and impact. The gospel message and the vision God has
                revealed to us is not simply American, but God-inspired; so
                therefore it works and is relevant in every nation and culture
                of the world. Mark 16:15 all the world/every person…Matthew
                28:19 all the nations… Our job as believers and as the local
                church is to pray, train, invest, send and support workers to go
                into all the world!
              </p>
              <h1>FAMILY</h1>
              <p>
                We believe that the family is the first foundation of God’s
                established order and the cornerstone of God’s government. The
                family is being torn apart when each member seeks to find their
                own fulfillment in a thousand different directions. It is our
                belief that a genuine church with a variety of programs and a
                full schedule is a tremendous unifier of the family and the only
                foundation for a real move of God. While having a full program
                to reach and minister to children, we feel that the key to the
                family is the parents. The Bible emphasizes the adult’s
                responsibility regarding their commitment to God. If the parents
                are disciples of Jesus; the children will be also.
              </p>
              <h1>MATURITY</h1>
              <p>
                Maturity through Lifestyle: Jesus looked for those who were
                dedicated to following Him. In two thousand years, the
                seriousness of the church towards being discipled has
                deteriorated. It is our goal as a church to learn and live the
                truths of Scripture. We live in the last days and an hour when
                the most exciting challenge in life is to be a disciple of Jesus
                Christ. The members of our churches are not satisfied to be
                “hearers only” but desire to be “doers of the Word of God”. They
                come faithfully, give joyously, worship fervently and witness
                loyally. They have found Jesus Christ to be “the same yesterday,
                today, and forever.”
              </p>
              <h1>PRAYER</h1>
              <p>
                Daily prayer is a normal part of all of our churches. This is
                the way of the battle for the Christian. Robbed of prayer, the
                church is robbed of power, direction, and divine presence. We
                know that the kingdom is built by God’s power, not man’s. That
                is why we place emphasis on touching and releasing God. That's
                why at The Potter's House Christian Fellowship Church, you'll
                find us in our building every morning praying for God to release
                His favor on our ministry, as well as one hour before every
                service.{" "}
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <AboutUsLinks />
      </Row>
    </UserLayout>
  </>
);

export default Vision;
