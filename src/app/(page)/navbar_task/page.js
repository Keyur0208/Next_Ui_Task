"use client"
import { Home } from "@mui/icons-material";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Pagination } from "@nextui-org/react";
import { useState } from "react";


export default function page() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuItems = [
        "Profile",
        "Dashboard",
        "Activity",
        "Analytics",
        "System",
        "Deployments",
        "My Settings",
        "Team Settings",
        "Help & Feedback",
        "Log Out",
    ];

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen}
                isBordered
                className="bg-black border-b-orange-100 "
            >
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand>
                        <Home />
                        <p className="font-bold text-inherit">ACME</p>
                    </NavbarBrand>
                </NavbarContent>

                <NavbarContent className="hidden text-black bg-black sm:flex gap-4" justify="center" >
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Features
                        </Link>
                    </NavbarItem>
                    <NavbarItem isActive>
                        <Link href="#" aria-current="page">
                            Customers
                        </Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Link color="foreground" href="#">
                            Integrations
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem className="hidden lg:flex">
                        <Link href="#">Login</Link>
                    </NavbarItem>
                    <NavbarItem>
                        <Button as={Link} color="primary" href="#" variant="flat">
                            Sign Up
                        </Button>
                    </NavbarItem>
                </NavbarContent>
                <NavbarMenu className="bg-black text-white" >
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                color={
                                    index == 1 ? "primary" :
                                        index === menuItems.
                                            index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                                }
                                className="w-full"
                                href="#"
                                size="lg"
                            >
                                {item}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </Navbar>
            <p>
                Lorem ipsum dolor sit amet
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus gravida quis blandit turpis. Augue neque gravida in fermentum et sollicitudin ac orci. Et sollicitudin ac orci phasellus egestas. Elementum tempus egestas sed sed risus pretium quam vulputate. Interdum velit euismod in pellentesque massa placerat duis ultricies.

                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.

                Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non tellus orci ac.

                Tempor orci dapibus ultrices in iaculis nunc sed augue lacus. In pellentesque massa placerat duis ultricies. Sit amet massa vitae tortor condimentum. Morbi tincidunt augue interdum velit euismod. Aliquet enim tortor at auctor urna nunc id. A scelerisque purus semper eget. Vitae justo eget magna fermentum iaculis. Arcu non odio euismod lacinia at quis. Et leo duis ut diam quam nulla porttitor massa. Eget nunc scelerisque viverra mauris. Suscipit tellus mauris a diam maecenas sed enim. Cras sed felis eget velit aliquet. Est placerat in egestas erat imperdiet sed euismod nisi porta. In ante metus dictum at tempor commodo. In cursus turpis massa tincidunt dui ut ornare lectus. Tempus iaculis urna id volutpat. Iaculis eu non diam phasellus vestibulum lorem sed risus.

                Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Faucibus pulvinar elementum integer enim neque volutpat. Gravida arcu ac tortor dignissim convallis aenean. Lectus quam id leo in vitae. Ultricies tristique nulla aliquet enim tortor. Nec tincidunt praesent semper feugiat nibh sed. Imperdiet proin fermentum leo vel orci porta non pulvinar neque. Praesent semper feugiat nibh sed pulvinar proin gravida. Dis parturient montes nascetur ridiculus mus mauris. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Ut lectus arcu bibendum at. Integer enim neque volutpat ac. Diam sit amet nisl suscipit. Eros donec ac odio tempor orci dapibus ultrices in iaculis. Ullamcorper a lacus vestibulum sed arcu non odio euismod. Quis lectus nulla at volutpat diam ut. Turpis egestas integer eget aliquet. Adipiscing tristique risus nec feugiat in fermentum posuere. Morbi tempus iaculis urna id. Amet commodo nulla facilisi nullam vehicula ipsum a arcu.

                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.

                Tincidunt vitae semper quis lectus nulla at volutpat diam. Gravida dictum fusce ut placerat. Erat velit scelerisque in dictum non. Tempus quam pellentesque nec nam aliquam sem et tortor consequat. Eu nisl nunc mi ipsum faucibus. Cras fermentum odio eu feugiat pretium nibh. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. Sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Sed id semper risus in hendrerit gravida rutrum. Eget nulla facilisi etiam dignissim. Erat imperdiet sed euismod nisi. Risus in hendrerit gravida rutrum quisque non tellus orci ac.

                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
                Rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui. Praesent semper feugiat nibh sed pulvinar. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque. Malesuada proin libero nunc consequat interdum varius sit amet. Lectus quam id leo in vitae. Sed viverra tellus in hac habitasse platea dictumst. Vivamus at augue eget arcu. Augue mauris augue neque gravida in.
            </p>
            <div className="flex justify-center p-2" >
                <Pagination initialPage={1} total={10} color="danger" showControls  isCompact showShadow siblings={3}  boundaries={1}/>
            </div>
        </>
    )
}