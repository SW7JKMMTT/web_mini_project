<table>
<thead><td>Course</td><td>Title</td><td>Instructor</td></thead>
{
  for $c in doc("uwm")/root/course_listing
  
    let $s := $c/section_listing
    order by $c/course
    return <tr><td>{data($c/course)}</td><td>{data($c/title)}</td><td>{$s[1]/instructor}</td></tr>
}
</table>