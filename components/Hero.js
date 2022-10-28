import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import userData from "@constants/data";

export default function Hero() {
	return (
		<div className="text-gray-700">
			<div className="flex justify-center items-center space-x-20">
				{/* Image container */}
				<div className="col items-center text-center">
					<div className="rounded-full overflow-hidden w-60 h-60 mx-auto shadow-lg">
						<img className="-mt-6" src={userData.avatarUrl} alt="avatar" />
					</div>
					<div className="text-3xl font-bold mt-4">Cheng Wang</div>
					<div className="text-lg pt-2 text-gray-400">chengwang@ucsd.edu</div>
					<div className="flex justify-center items-center space-x-2 pt-4">
						<a href="mailto:chengwang@ucsd.edu">
							<svg className="transition fill-indigo-500 hover:fill-indigo-700" t="1661316260356" class="icon" viewBox="0 0 1365 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10694" width="36" height="36"><path d="M684.00064 607.733333L1282.005973 9.728A133.077333 133.077333 0 0 0 1232.00064 0h-1098.666667c-16.938667 0-33.205333 3.2-48.138666 8.938667l598.805333 598.794666z" p-id="10695"></path><path d="M684.00064 728.394667l-664.533333-664.533334A132.48 132.48 0 0 0 0.00064 133.333333v757.333334C0.00064 964.266667 59.733973 1024 133.333973 1024h1098.666667c73.6 0 133.333333-59.733333 133.333333-133.333333v-757.333334a133.013333 133.013333 0 0 0-18.528-67.733333L684.00064 728.394667z" p-id="10696"></path></svg>
						</a>
						<a href="https://github.com/Galaxeaaa">
							<svg className="transition fill-indigo-500 hover:fill-indigo-700" t="1661315941760" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2335" width="36" height="36"><path d="M512 42.666667A464.64 464.64 0 0 0 42.666667 502.186667 460.373333 460.373333 0 0 0 363.52 938.666667c23.466667 4.266667 32-9.813333 32-22.186667v-78.08c-130.56 27.733333-158.293333-61.44-158.293333-61.44a122.026667 122.026667 0 0 0-52.053334-67.413333c-42.666667-28.16 3.413333-27.733333 3.413334-27.733334a98.56 98.56 0 0 1 71.68 47.36 101.12 101.12 0 0 0 136.533333 37.973334 99.413333 99.413333 0 0 1 29.866667-61.44c-104.106667-11.52-213.333333-50.773333-213.333334-226.986667a177.066667 177.066667 0 0 1 47.36-124.16 161.28 161.28 0 0 1 4.693334-121.173333s39.68-12.373333 128 46.933333a455.68 455.68 0 0 1 234.666666 0c89.6-59.306667 128-46.933333 128-46.933333a161.28 161.28 0 0 1 4.693334 121.173333A177.066667 177.066667 0 0 1 810.666667 477.866667c0 176.64-110.08 215.466667-213.333334 226.986666a106.666667 106.666667 0 0 1 32 85.333334v125.866666c0 14.933333 8.533333 26.88 32 22.186667A460.8 460.8 0 0 0 981.333333 502.186667 464.64 464.64 0 0 0 512 42.666667" p-id="2336"></path></svg>
						</a>
						<a href="https://www.linkedin.com/in/chengwang1111/">
							<svg className="transition fill-indigo-500 hover:fill-indigo-700" t="1661316346665" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11618" width="36" height="36"><path d="M872.448 872.6016h-151.6544v-237.568c0-56.6784-1.1776-129.5872-79.0528-129.5872-79.0528 0-91.136 61.6448-91.136 125.3888v241.7664H399.0016V384h145.6128v66.56h1.9968c20.3264-38.4 69.8368-78.848 143.7696-78.848 153.6512 0 182.0672 101.0688 182.0672 232.704v268.1856zM227.6864 317.1328c-48.8448 0-88.064-39.4752-88.064-88.064s39.2704-88.064 88.064-88.064a88.064 88.064 0 0 1 0 176.128z m75.9808 555.52h-152.064V384h152.064v488.6016zM948.2752 0H75.5712C33.792 0 0 33.024 0 73.728v876.544C0 990.976 33.792 1024 75.5712 1024h872.5504c41.728 0 75.8784-32.9728 75.8784-73.728V73.728C1024 33.0752 989.8496 0 948.1216 0h0.1536z" p-id="11619"></path></svg>
						</a>
						<a href="https://drive.google.com/file/d/1O_jdcHgd1_u4p-KMWuS6TaWNmiuWD0Pd/view?usp=sharing">
							<svg className="transition fill-indigo-500 hover:fill-indigo-700" transform="scale(1.3, 1.3)" t="1661565387201" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11476" width="36" height="36"><path d="M586.9568 165.888H272.4864c-23.2448 0-42.1888 18.944-42.1888 42.1888v607.8464c0 23.2448 18.944 42.1888 42.1888 42.1888H751.616c23.2448 0 42.1888-18.944 42.1888-42.1888V372.736l-206.848-206.848z m-158.1056 88.1664c37.1712 0 67.2768 30.1056 67.2768 67.2768s-30.1056 67.2768-67.2768 67.2768c-37.1712 0-67.2768-30.1056-67.2768-67.2768s30.0032-67.2768 67.2768-67.2768z m0 145.3056c52.1216 0 94.5152 37.888 94.5152 84.3776 0 11.6736-9.4208 21.0944-21.0944 21.0944-11.6736 0-21.0944-9.4208-21.0944-21.0944 0-22.8352-23.9616-42.1888-52.3264-42.1888s-52.3264 19.3536-52.3264 42.1888c0 11.6736-9.4208 21.0944-21.0944 21.0944s-21.0944-9.4208-21.0944-21.0944c0-46.592 42.3936-84.3776 94.5152-84.3776z m240.9472 344.8832H354.2016c-11.5712 0-21.0944-9.5232-21.0944-21.0944s9.5232-21.0944 21.0944-21.0944H669.696c11.5712 0 21.0944 9.5232 21.0944 21.0944 0.1024 11.5712-9.4208 21.0944-20.992 21.0944z m0-106.8032H354.2016c-11.5712 0-21.0944-9.5232-21.0944-21.0944s9.5232-21.0944 21.0944-21.0944H669.696c11.5712 0 21.0944 9.5232 21.0944 21.0944s-9.4208 21.0944-20.992 21.0944z m-48.128-287.232c-3.8912 0-7.2704-3.3792-7.2704-7.2704v-89.9072l97.1776 97.1776h-89.9072z" p-id="11477"></path><path d="M428.8512 351.744c16.7936 0 30.4128-13.6192 30.4128-30.4128s-13.6192-30.4128-30.4128-30.4128-30.4128 13.6192-30.4128 30.4128 13.6192 30.4128 30.4128 30.4128z" p-id="11478"></path></svg>
						</a>
					</div>
				</div>
			</div>
		</div >
	);
}
