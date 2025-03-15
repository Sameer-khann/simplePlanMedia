import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import { CaretDownIcon } from "@radix-ui/react-icons";
import shap1 from '../assets/nav1.svg';
import shap2 from '../assets/nav2.svg';

const Nav = () => {
	return (
		<NavigationMenu.Root className="relative z-20 flex w-full justify-start">
			<NavigationMenu.List className=" m-0 flex  list-none rounded-md  p-1 ">
				<NavigationMenu.Item>
					<NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-3 py-2 text-[15px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7 uppercase">
						Categories{" "}
						<CaretDownIcon
							className="relative top-px text-violet10 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
							aria-hidden
						/>
					</NavigationMenu.Trigger>

					<NavigationMenu.Content className="bg-red-500 absolute -left-32 top-10 w-full  z-10">
						<ul className="h-auto lg:h-[80vh] w-[100vw] sm:w-[90vw] bg-white flex items-center justify-center flex-wrap lg:flex-nowrap p-5">
							<div className="w-full flex items-center justify-center">
								<div className="flex justify-center  gap-20 w-full text-indigo-800">
									<div className="w-full sm:w-1/2 lg:w-1/5 text-start">
										<div className="font-custom text-lg flex flex-col gap-1">
											<p className="hover:text-red-500">Language</p>
											<p className="hover:text-red-500">Cooking</p>
											<p className="hover:text-red-500">Music</p>
											<p className="hover:text-red-500">Arts & Craft</p>
											<p className="hover:text-red-500">Yoga</p>
											<p className="hover:text-red-500">Academic</p>
											<p className="hover:text-red-500">Back to Roots</p>
											<p className="hover:text-red-500">Funteresting</p>
										</div>
									</div>
									<div className="w-full sm:w-1/2 lg:w-1/5 text-start">
										<div className=" font-custom text-lg flex flex-col gap-1">
											<p className="hover:text-red-500">Indian</p>
											<p className="hover:text-red-500">Norwegian</p>
											<p className="hover:text-red-500">Category 04</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-full relative">
								<div className="flex  items-center justify-center w-full h-[80vh] mt-10 lg:mt-0 ">
									{/* Shape Background */}
									<div className="relative h-[450px] w-[600px]  z-10">
										<img src={shap2} alt="Shape" className="w-full h-full object-contain absolute top-0" />
										<img src={shap1} alt="Shape" className="w-full h-full object-contain absolute z-20 top-0" />

										<div className="absolute z-30 w-full h-full flex items-center justify-center flex-col">
										<h1 className="text-xl sm:text-2xl font-bold font-custom text-white px-28 mb-5">“Do anything, but let it produce joy.”</h1>
										<p className="text-sm sm:text-lg font-normal font-custom text-white px-20">-Walt Whitman</p>
										</div>

									</div>

								</div>

							</div>
						</ul>
					</NavigationMenu.Content>

				</NavigationMenu.Item>
			</NavigationMenu.List>

		</NavigationMenu.Root>
	);
};

export default Nav;
