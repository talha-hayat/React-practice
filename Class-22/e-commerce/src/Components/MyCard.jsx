import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Divider } from "@heroui/divider";
import { Image } from "@heroui/image";
import { Link } from "react-router-dom";
import { car1 } from "../images";
import { div } from "framer-motion/client";


export default function MyCard() {
    return (
        <div className="flex flex-col">
            <Card className="max-w-[350px] mt-6 m-7">
            <CardHeader className="flex gap-3">
                <Image
                    alt="heroui logo"
                    height={30}
                    radius="sm"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAAC0CAMAAABSSTIwAAAAY1BMVEX///8AAAC3t7fr6+v39/cjIyPo6OiXl5f7+/vd3d3CwsIODg709PSrq6vX19fu7u5TU1M6OjptbW0/Pz/JyckUFBRbW1tzc3MqKip5eXmxsbGHh4fR0dGdnZ1ISEhnZ2ePj4+Osqq8AAAEXUlEQVR4nO3dCXqqQAwAYEZEBdyrrS21ev9TPqzPAoowC5lMYv4ThHwyZLYYRUIIIYQQQgghhBBCCCGEEIKs8SqO4zl2FCGIR8XPIVGl/eHtc5Fix4NpeT6oe5877KiQfG0ecvErmY6xQ/NvsW9Pxq/ziyVk+eSXcZOPsCP0qehOxsX7y3xpVm/92Sh/IN/Ycfqx1EnGxQI7Uh92utlQ6ogdKzyDbLxAPlKTbCj1hR0vrLlZNpTiPZ6uTdORc/7eHk2zUdYf2DHDmZhnQym+9em7TTr2M+ywgRh9YytT7LiBaNXmLXj+PLSL83s8i7EP23QcsCOHYFyBVTjWYiP7dBTYsQOwfldK2LEDcMiGmmAHPzirivSGX2XqMHRwHDymLulYY0c/OJeRVG2wox+c8UpHXcJuG+rHJR1qhR3+0CQdDZKOBklHgwylDfKhbbBYRK/wK8Myl3TwK9JlCtfkkg5+E3yXsTTHjh2Aw+DBb+iIonlunQ6OS8fRp202+FUdF4YnXSpMz4jZ1unYcQP5tssGzz3J0skmGwnPHevSyiYdGXbUcBbm2dhixwzJ+PzPnt1KR90sMUwH8+tPhhNbhlPZJqMzQEwLsDqD6uMFslG+L13XvuoYf2Lr5lqbDDnzUbRGYzt/y7YYbZH2nTF9kRflT9ZxVzJnO2vrkD0ZQpIF60r0ucnxISObYokdFaZ4N93+f22S9/OI4Q6CEEIMKLYeJifxkHEEYXYqP6JWu2nf5YfnxKxin1x3JAvjx5pde1vkrH4g6W1/NjHs7LO7LSbuGc1v6ytga4PnSuv7dmyq1bv1wJNmQtK7XSom+Xjcql5nvWPILHvc0WXxvkzaznUczp3PlrY0FCvHDwbj6dOdlbzIWh8vzopnB2MYbNd27rtttscs/VvdGKfZcdvZQYt8uwaNlliXX0qS6B2VIn5KzOlwbRvSHQmtTjB0o3x3waphRzfCw8fX8Nkg3CzKoQlBF6rNkbYw6fjAfi471u1L+tAs1t1uv3UgednHsvGRDorFR0+/WhcED6kD/jgo/jycLor2ITd6WF9P0EPt4+J0bbbfJ/bzmQEqSCu0joBYHD43Q+uMpW17QW0/2E9oAqw+r1DaZrC+BaiP0GA6hs8GpbadTj3CdNG5zABakd6QWSUEWDBuQ2UR2alziT4qpQfg1L6OyDQfePZWoTGPc2q2aIJGx3BP74pSb9hPqsOpyY8ZCifYPX1XLihcewGfzFYIvC0e3xUKbwvINvUz4c9bgDZm24W/XeszG+E3FPNWkl6FXpiCrxk3hT6Ns2rvY++E/bw92k4LAwr8r1u8Vh0XYVceoPv2bcJuR+hxwnIV9ljqYYOlKexT2Z4/LKG3FfOypVAX9vaC1xnLRdizFm/rpDdhrwB5nrIEP2nxPHiEfmbO888j7KI08rR7f0Ogf9Tg971IZyOK5oVuFz0n+4LKxZbZMhsBy5Z0Tv8IIYQQQgghhBBCCCGEEEK8gH8YuTl4vHXvkQAAAABJRU5ErkJggg=="
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">Seller</p>
                    <p className="text-small text-default-500">seller@gmail.com</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <Image
                    alt="HeroUI hero Image"
                    src={car1}
                    width={350}
                />

                <div className="flex justify-between text-xl mt-3 px-2">
                    <div>
                        <p>Price: 10M</p>
                    </div>

                    <div className="pr-5">
                        <p>Model: 2003</p>
                    </div>
                </div>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
                    Visit source code on GitHub.
                </Link>
            </CardFooter>
        </Card>
        </div>
        
    );
}
