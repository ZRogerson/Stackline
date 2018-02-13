I decided to begin with create-react-app becase it's great for rapid prototyping. Having a starter build with tons of out of the box functionality really gets these things going faster. In a real production build I would prefer to role my own setup as there is a lot of code bloat in pre-built solutions.

create-react-app comes pre-rolled with jest for testing but I like the assertion support added by enzyme so I tossed that into the mix and then I needed to moch fetching for data retrieval so I threw in jest-fetch-moch for out of the box fetch support for my tests. I did not get to write enough tests.

To get going follow the following:

clone this repo
```
git clone git@github.com:ZRogerson/Stackline.git
```

start the application
```
npm start
```

run some tests
```
npm run test
```

After npm run test you will need to select option 'a' to run all tests as there are no new tests since the last commit.