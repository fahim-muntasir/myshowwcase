import React from "react";
import { Modal } from "flowbite-react";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";

function ProjectModal({ isOpen, onClose, data }) {
  if (!isOpen) return null;
  return (
    <>
      <Modal show={isOpen} onClose={onClose}>
        <Modal.Header className="py-3">
          <h2>{data?.name}</h2>
          <div className="flex gap-2 mt-2">
            {data?.technology?.map((tec, index) => (
              <span
                key={index}
                style={{
                  color: tec.color,
                  border: `1px solid ${tec.color}`,
                }}
                className={`text-xs rounded-xl px-2`}
              >
                {tec?.name}
              </span>
            ))}
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div>
              <video
                poster={`/images/${data?.image}`}
                controls
                className="w-full h[14rem] md:h-80 lg:h-80"
              >
                <source src={`/videos/${data?.videoLink}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {data?.description}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="py-3">
          <ul>
            {data?.githubLink && (
              <li className="flex gap-2 items-center mb-1">
                <AiFillGithub />
                <a
                  href={data.githubLink}
                  className="text-sky-500 text-sm"
                  target="blank"
                >
                  {data.githubLink}
                </a>
              </li>
            )}
            {data?.liveLink && (
              <li className="flex gap-2 items-center">
                <AiOutlineLink />
                <a
                  href={data.liveLink}
                  className="text-sky-500 text-sm"
                  target="blank"
                >
                  {data?.liveLink}
                </a>
              </li>
            )}
          </ul>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectModal;
