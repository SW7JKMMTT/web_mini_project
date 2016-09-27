<ul>
{
  for $mpd in (
    for $c in doc("uwm")//course_listing
      for $i in distinct-values($c//instructor)
        return <course><name>{data($c/course)}</name><instructor>{data($i)}</instructor></course>
  )
  group by $d := $mpd//instructor
  order by count($mpd/instructor) descending
  return <li><ul><li>{$d}</li><li>{count($mpd/instructor)}</li></ul></li>
}
</ul>